import React, { useState } from 'react'
import {ProductDetail, ProductAction, ProductReview} from '../../components'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../features/product/productApiSlice'

 
function ProductDetailPage() {
  const { id } = useParams()
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id)
 
  if (isLoading) return <p className="p-4">Loading...</p>
  if (isError || !product) return <p className="p-4 text-red-500">Product not found.</p>
 
  return (
    <div className=" w-full md:max-w-7xl mx-1.5 md:mx-auto py-4">
      {/* Breadcrumb */}
      <p className="text-xs text-gray-400 mb-3">
        Home › {product.category} › {product.title}
      </p>
 
      <ProductDetail product={product} />
      <ProductReview product={product} />
    </div>
  )
}
 
export default ProductDetailPage