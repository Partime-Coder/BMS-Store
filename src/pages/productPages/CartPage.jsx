import React from 'react'
import { getMyCart } from '../../services/cartServices/cartService'
import { CartItemsLayout, Loader } from '../../components'
import { BsCartX } from '../../assets/icons/icons.js'
import { useSelector } from 'react-redux'


function CartPage() {
  const cart = useSelector((state) => state.cart);

  if (!cart?.products?.length) {
    return (
      <div className="flex-1 min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">

        <BsCartX className="text-7xl sm:text-8xl text-amber-500" />

        <p className="mt-5 text-lg sm:text-2xl font-medium text-gray-500">
          You haven't added anything to your cart yet.
        </p>

      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-xl font-medium text-gray-900 mb-4">Shopping Cart</h1>
      <CartItemsLayout products={cart.products} />
    </div>
  )
}

export default CartPage