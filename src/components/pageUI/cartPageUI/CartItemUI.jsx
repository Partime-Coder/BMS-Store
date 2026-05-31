import React, { useState } from 'react'
// import { removeFromCart, updateQuantity } from '../../../services/cartServices/cartService';
import { CartItemAction, CartItemToggle } from '../../index.js'

function CartItemUI({ item }) {

  const {
    productId,
    name,
    brand,
    category,
    image,
    price,
    discountedPrice,
    discountPercentage,
    inStock,
    quantity,
    stock,
    minimumOrderQuantity,
    isSelected,
  } = item;

  
  return (
    <div
      className="
      flex gap-3 sm:gap-4
      bg-white border-t border-b  border-gray-200 
      p-3 sm:p-4
    "
    >

      {/* Checkbox */}
      <div className="flex items-center shrink-0">
        <CartItemToggle productId={productId} />
      </div>

      {/* Image */}
      <div className="shrink-0 w-28 h-28 sm:w-44 sm:h-44 flex items-center justify-center bg-white rounded">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            e.target.src =
              'https://via.placeholder.com/160x160?text=No+Image';
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 min-w-0 gap-1">

        {/* Title */}
        <h3 className="text-sm sm:text-base font-medium leading-snug line-clamp-2 hover:text-[#C7511F]">
          {name}
        </h3>

        {/* Brand + Category */}
        <p className="text-[11px] sm:text-xs text-gray-500">
          by <span className="text-[#007185]">{brand}</span>
          {' · '}
          <span className="capitalize">{category}</span>
        </p>

        {/* Stock */}
        <p
          className={`text-[11px] sm:text-sm ${inStock ? 'text-[#007600]' : 'text-red-600'
            }`}
        >
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>

        {/* Price */}
        <div className="mt-1">
          <div className="flex items-baseline gap-2 flex-wrap">

            <span className="text-lg sm:text-2xl font-medium text-[#0F1111]">
              <sup className="text-[15px] sm:text-sm align-super">$</sup>
              {discountedPrice.toFixed(2)}
            </span>

            {discountPercentage > 0 && (
              <>
                <span className="text-[11px] sm:text-sm text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>

                <span className="text-[11px] sm:text-sm text-red-600 font-medium">
                  -{Math.round(discountPercentage)}%
                </span>
              </>
            )}
          </div>
        </div>

        {/* Delivery */}
        <p className="text-[11px] sm:text-sm text-gray-700 mt-1">
          <span className="font-medium">FREE delivery</span>
        </p>

        {/* Actions */}
        <CartItemAction
          productId={productId}
          quantity={quantity}
          stock={stock}
          minimumOrderQuantity={minimumOrderQuantity}
        />
      </div>
    </div>
  )
}

export default CartItemUI