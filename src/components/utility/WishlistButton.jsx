import React, { useState } from 'react'
import { Button } from '../index.js'
import { addToCart } from '../../services/cartServices/cartService.js'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setWishlistState } from '../../features/wishlist/wishlistSlice.js'
import { addToWishlist } from '../../services/wishlistServices/wishlistService.js'


function WishlistButton({ product }) {
  const { isAuthenticated } = useSelector((state) => state.auth)
  const {products} = useSelector((state) => state.wishlist);
  const isInWishlist = products?.some(item => item.productId === product.id);

  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToWishlist = async (e) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      navigate('/login', {
        state: {
          message: 'Please log in to add items to your Wishlist',
          redirectTo: `/product/${product.id}`
        }
      });
      return;
    };
    try {
      const response = await addToWishlist(product);
      dispatch(setWishlistState(response));
      setIsAdding(true);

      setTimeout(() => {
        setIsAdding(false);
      }, 2000);


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
  onClick={handleAddToWishlist}
  disabled={isInWishlist}
  textColor={
    isInWishlist
      ? "text-gray-500"
      : "text-gray-900"
  }
  bgColor="bg-white"
  hoverBgColor="hover:bg-gray-50"
  rounded="rounded-full"
  className="
    mt-2
    w-full
    text-xs sm:text-sm
    py-1.5 px-4 sm:px-6
    border border-gray-200
    disabled:bg-gray-100
  "
>
  {isInWishlist
    ? "In Wishlist"
    : isAdding
      ? "Added"
      : "Add to Wishlist"}
</Button>
  )
}

export default WishlistButton