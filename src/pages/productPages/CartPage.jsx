import React from 'react'
import { getMyCart } from '../../services/cartServices/cartService'
import { CartItemsLayout, CartSummery, Loader , Container, CartZeroItemsUI} from '../../components'
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
     <Container>
      <div className="">


        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT */}
          <div className="flex-1 min-w-0">
            <CartItemsLayout products={cart.products} />
          </div>

          {/* RIGHT — sticky so it stays visible while scrolling items */}
          <div className="w-full lg:w-[320px] shrink-0 self-start lg:sticky lg:top-6">
            <CartSummery />
          </div>

        </div>
      </div>
    </Container>
  )
}

export default CartPage