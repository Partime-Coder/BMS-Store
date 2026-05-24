import React from 'react'
import { Button } from '../index.js'
import { addToCart } from '../../services/cartServices/cartService.js'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

function CartButton({product, quantity}) {
    const { isAuthenticated} = useSelector((state) => state.auth)
    const navigate =  useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = async (e) => {
        // e.preventDefault();
        e.stopPropagation();
        if (!isAuthenticated) {
            navigate('/login');
        };
        try {
            await addToCart(product, quantity)
            
        } catch (error) {
            console.log(error);
            
        }
    }



  return <Button
  onClick={handleAddToCart}
  textColor='text-[#0F1111]'
  bgColor='bg-[#FFD814]'
  hoverBgColor='hover:bg-[#F7CA00]'
  rounded='rounded-full'
  className='mt-2
        w-full sm:w-fit
        text-xs sm:text-sm
        py-1.5 px-4 sm:px-6
         border border-[#FCD200]'
  >Add to Cart</Button>
}

export default CartButton