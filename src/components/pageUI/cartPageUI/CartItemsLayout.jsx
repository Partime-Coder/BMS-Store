import React from 'react'
import {CartItemUI } from '../../index.js'

function CartItemsLayout({ products, onRemove, onQuantityChange, onToggleSelect }) {
  return (
    <div className="flex flex-col gap-3">
      {products.map(item => (
        <CartItemUI
          key={item.productId}
          item={item}
          onRemove={onRemove}
          onQuantityChange={onQuantityChange}
          onToggleSelect={onToggleSelect}
        />
      ))}
    </div>
  )
}

export default CartItemsLayout