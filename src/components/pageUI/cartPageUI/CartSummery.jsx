import React from 'react'
// import { useSelector } from 'react-redux'
import { getCartSummary } from '../../../services/cartServices/cartService'

function CartSummary() {
  // const cart = useSelector((state) => state.cart);

  const { totalItems, selectedItems, subtotal, totalDiscount, unselectedCount, originalTotal } = getCartSummary();

  return (
    <div className="bg-white border border-gray-200  p-5 w-full">

      <p className="text-base font-medium text-gray-900 pb-3 border-b border-gray-200 mb-3">
        Order summary
      </p>

      <div className="flex flex-col gap-2 text-sm text-gray-500">

        <div className="flex justify-between">
          <span>Selected items ({selectedItems} of {totalItems})</span>
          <span className="text-gray-900">${originalTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Discount</span>
          <span className="text-green-600">−${totalDiscount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span className="text-green-600">FREE</span>
        </div>

      </div>

      <hr className="my-3 border-gray-200" />

      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-900">Subtotal</span>
        <span className="text-lg font-medium text-gray-900">${subtotal.toFixed(2)}</span>
      </div>

      {totalDiscount > 0 && (
        <div className="bg-green-50 text-green-700 text-xs text-center py-2 px-3 rounded-lg mt-3">
          You save ${totalDiscount.toFixed(2)} on selected items
        </div>
      )}

      <button
        disabled={selectedItems === 0}
        className="w-full mt-3 py-2.5 bg-[#FFD814] hover:bg-[#F7CA00] disabled:opacity-50 disabled:cursor-not-allowed border border-[#FCD200] rounded-full text-sm font-medium text-[#0F1111] transition-colors"
      >
        Proceed to checkout ({selectedItems} {selectedItems === 1 ? 'item' : 'items'})
      </button>

      {unselectedCount > 0 && (
        <p className="text-xs text-gray-400 text-center mt-2">
          {unselectedCount} unselected {unselectedCount === 1 ? 'item' : 'items'} not included
        </p>
      )}

    </div>
  )
}

export default CartSummary