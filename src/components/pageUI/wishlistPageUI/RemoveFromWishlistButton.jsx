import React from 'react'
import { Button } from '../../index.js'
import { useDispatch } from 'react-redux'
import { removeFromWishlist } from '../../../services/wishlistServices/wishlistService.js'
import { removeProduct } from '../../../features/wishlist/wishlistSlice.js'
import { AiOutlineDelete } from '../../../assets/icons/icons.js'

function RemoveFromWishlistButton({ productId }) {
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = async (e) => {
    e.stopPropagation();
    try {
      await removeFromWishlist(productId);
      dispatch(removeProduct(productId));

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      onClick={handleRemoveFromWishlist}
      textColor={
        "text-gray-900"
      }
      bgColor="bg-white"
      hoverBgColor="hover:bg-gray-50"
      rounded="rounded-full"
      className="
        mt-2 
        w-full
        text-xs sm:text-sm
        py-2.5 px-4 sm:px-6
        border border-gray-200
        disabled:bg-gray-100
      "
    >
      <span className="flex items-center justify-center gap-2">
        <AiOutlineDelete className="text-base" />
        <span>Remove</span>
      </span>
    </Button>
  )
}

export default RemoveFromWishlistButton