import React from 'react'
import { useSelector } from 'react-redux'
import {BsCart3} from '../../assets/icons/icons.js'
import { useNavigate } from 'react-router'

function CartBadge() {
  const { products } = useSelector((state) => state.cart)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const totalItems = products?.reduce((sum, p) => sum + p.quantity, 0) || 0

  return (
    <div
      className="relative cursor-pointer p-2"
      onClick={() => isAuthenticated?  navigate('/cart') : navigate('/login',{
        state: {
                    message: 'Please log in to view your cart',
                    redirectTo: '/cart'

                }
      })}
    >
      <BsCart3 className="text-white text-2xl" />

      {totalItems > 0 && (
        <span className="
          absolute -top-0.5 -right-0.5
          min-w-4.5 h-4.5
          bg-amber-400 text-[#0F1111]
          text-[10px] font-bold
          rounded-full
          flex items-center justify-center px-1
        ">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </div>
  )
}

export default CartBadge