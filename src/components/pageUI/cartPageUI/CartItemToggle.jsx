import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSelectProduct } from '../../../features/cart/cartSlice'
import { toggleProductSelection } from '../../../services/cartServices/cartService'

function CartItemToggle({productId}) {
    const dispatch = useDispatch();
    const isSelected = useSelector((state) => state.cart.products.find(p => p.productId === productId)?.isSelected);

    const handleToggleSelect = () => {
        try {
            toggleProductSelection(productId);
            dispatch(toggleSelectProduct(productId));
        } catch (error) {
            console.error("Error toggling product selection:", error);
        }
    };
  return (
     <input
          type="checkbox"
          checked={isSelected}
          onChange={handleToggleSelect}
          className="w-4 h-4 cursor-pointer accent-[#FFD814]"
          aria-label="Select item"
        />
  )
}

export default CartItemToggle