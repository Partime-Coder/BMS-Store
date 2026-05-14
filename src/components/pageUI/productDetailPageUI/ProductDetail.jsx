import React, { useState } from 'react'
import {ProductAction} from '../../index.js'

const TECH_CATEGORIES = ["laptops", "smartphones", "tablets", "mobile-accessories"]
 
function ProductDetail({ product }) {
  const [activeImg, setActiveImg] = useState(null)
  const mainImage = activeImg ?? product.thumbnail
  const isTech = TECH_CATEGORIES.includes(product.category)
 
  return (
    <>
     <div className='py-2.5'>
            <h1 className="text-2xl font-semibold text-gray-900 leading-snug">
              {product.title}
            </h1>
            <p className="text-sm text-blue-600 mt-0.5 cursor-pointer hover:underline">
              by {product.brand}
            </p>
          </div>
      {/* ── Top: gallery + info ── */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
 
        {/* Image gallery — 40% */}
        <div className="flex flex-col-reverse md:flex-row  gap-2 md:w-2/5">
          {/* Thumbnails */}
          <div className="flex  md:flex-col justify-center md:justify-normal gap-2.5 ">
            {[...product.images].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setActiveImg(img)}
                className={`w-12 h-12 object-cover rounded cursor-pointer border
                  ${activeImg === img || (!activeImg && i === 0)
                    ? 'border-blue-500'
                    : 'border-gray-200'
                  }`}
              />
            ))}
          </div>
 
          {/* Main image */}
          <div className="flex-1 w-full aspect-square overflow-hidden rounded-lg border border-gray-200">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
 
        {/* Info — 60% */}
        <div className="md:w-3/5 flex flex-col gap-3">
 
          {/* Stock badge */}
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit
            ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
            {product.availabilityStatus ?? (product.inStock ? 'In Stock' : 'Out of Stock')}
          </span>
 
          {/* Title + brand */}
          {/* <div>
            <h1 className="text-lg font-semibold text-gray-900 leading-snug">
              {product.title}
            </h1>
            <p className="text-sm text-blue-600 mt-0.5 cursor-pointer hover:underline">
              by {product.brand}
            </p>
          </div> */}
 
          {/* Description */}
          <p className="text-lg text-gray-900 font-semibold leading-relaxed">
            {product.description}
          </p>
 
          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-sm">
              {'★'.repeat(Math.round(product.rating))}
              {'☆'.repeat(5 - Math.round(product.rating))}
            </span>
            <span className="text-xs text-gray-400">
              {product.rating} / 5
              {product.reviews?.length > 0 && ` · ${product.reviews.length} reviews`}
            </span>
          </div>
 
          <div className="border-t border-gray-100" />
 
          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-gray-900">
              ${product.discountedPrice}
            </span>
            <span className="text-sm text-gray-400 line-through">
              ${product.price}
            </span>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
              {product.discountPercentage}% off
            </span>
          </div>
 
          <div className="border-t border-gray-100" />
 
          {/* Basic details */}
          <div className="flex flex-col gap-1.5 text-sm">
            <DetailRow label="Category" value={product.category} />
            <DetailRow label="Brand"    value={product.brand} />
            <DetailRow label="Stock"    value={`${product.stock} units`} />
            {product.tags?.length > 0 && (
              <DetailRow label="Tags" value={product.tags.join(', ')} />
            )}
          </div>
 
          {/* Actions — qty, cart, wishlist */}
          <ProductAction product={product} />
 
        </div>
      </div>
 
      {/* ── Extra details ── */}
      <div className="border border-gray-100 rounded-xl p-4 mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-3">Product Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {product.shippingInformation && (
            <DetailRow label="Shipping" value={product.shippingInformation} />
          )}
          {product.warrantyInformation && (
            <DetailRow label="Warranty" value={product.warrantyInformation} />
          )}
          {product.returnPolicy && (
            <DetailRow label="Returns"  value={product.returnPolicy} />
          )}
          {isTech && product.weight && (
            <DetailRow label="Weight"   value={`${product.weight} kg`} />
          )}
          {isTech && product.dimensions && (
            <DetailRow
              label="Dimensions"
              value={`${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm`}
            />
          )}
        </div>
      </div>
    </>
  )
}
 
function DetailRow({ label, value }) {
  return (
    <div className="flex gap-3">
      <span className="text-gray-400 w-24 shrink-0">{label}</span>
      <span className="text-gray-800">{value}</span>
    </div>
  )
}
 
export default ProductDetail