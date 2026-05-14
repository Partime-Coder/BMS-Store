 
import React from 'react'
 
function ProductReview({ product }) {
  if (!product.reviews?.length) return null
 
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-900 mb-3">
        Customer Reviews ({product.reviews.length})
      </h2>
 
      <div className="flex flex-col gap-2">
        {product.reviews.map((review, i) => (
          <div key={i} className="border border-gray-100 rounded-xl p-3">
 
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xs">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </span>
                <span className="text-sm font-medium text-gray-800">
                  {review.reviewerName}
                </span>
              </div>
              <span className="text-xs text-gray-400">
                {new Date(review.date).toLocaleDateString('en-IN', {
                  day: 'numeric', month: 'short', year: 'numeric'
                })}
              </span>
            </div>
 
            <p className="text-sm text-gray-500 leading-relaxed">{review.comment}</p>
 
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default ProductReview