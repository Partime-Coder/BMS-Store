import React, { useEffect, useState } from 'react'
import { ProductDetail, ProductAction, ProductReview, SimillerProductSliderCard } from '../../components'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery, useGetProductsByCategoryQuery } from '../../features/product/productApiSlice'
 

function ProductDetailPage() {
  const { id } = useParams()
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id)
  const { data: SimillerProducts, isLoading: sliderLoading, isError: sliderError } = useGetProductsByCategoryQuery(
    {
      category: product?.category,
      limit: 12,
    },
    { skip: !product?.category });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [id]);

  if (isLoading) return <p className="p-4">Loading...</p>
  if (isError || !product) return <p className="p-4 text-red-500">Product not found.</p>
  console.log("data", SimillerProducts);

  return (
    <div className=" w-full md:max-w-7xl px-1.5 md:mx-auto py-4">
      {/* Breadcrumb */}
      <p className="text-xs text-gray-400 mb-3">
        Home › {product.category} › {product.title}
      </p>
      <ProductDetail product={product} />
      <SimillerProductSliderCard data={SimillerProducts} isLoading={sliderLoading} />
      <ProductReview product={product} />
    </div>
  )
}

export default ProductDetailPage