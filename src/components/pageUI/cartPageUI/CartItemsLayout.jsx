import React from 'react'
import { CartItemUI } from '../../index.js'
import { getCartSubTotal } from '../../../services/cartServices/cartService.js'

function CartItemsLayout({ products, onToggleSelect }) {
  const { subtotal, totalItems } = getCartSubTotal();
  return (
    <div className='bg-White p-5'>
      <h1 className="text-2xl font-medium text-gray-900 mb-1">Shopping Cart</h1>
      <p className="text-sm text-gray-400 mb-6">
        {totalItems} {totalItems === 1 ? 'item' : 'items'}
      </p>

      <div className="flex flex-col ">
        {products.map(item => (
          <CartItemUI
            key={item.productId}
            item={item}
            onToggleSelect={onToggleSelect}
          />
        ))}
      </div>
      <div className="flex justify-center sm:justify-end mt-4 pt-4 border-t border-gray-200">
        <p className="text-lg text-gray-900">
          Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}):
          <span className="font-bold ml-1">${subtotal.toFixed(2)}</span>
        </p>
      </div>

    </div>
  )
}

export default CartItemsLayout