import React, { useState } from 'react'
import { Button } from '../index.js'
import { addToCart } from '../../services/cartServices/cartService.js'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../../features/cart/cartSlice.js'

function CartButton({ product, quantity }) {
    const { isAuthenticated } = useSelector((state) => state.auth)
    const [isAdding, setIsAdding] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = async (e) => {
        e.stopPropagation();
        if (!isAuthenticated) {
            navigate('/login', {
                state: {
                    message: 'Please log in to add items to your cart',
                    redirectTo: `/product/${product.id}`
                }
            });
            return;
        };
        try {
            const response = await addToCart(product, quantity);
            dispatch(setCart(response));
            setIsAdding(true);

            setTimeout(() => {
                setIsAdding(false);
            }, 2000);


        } catch (error) {
            console.log(error);
        }

    };

    return <Button
        onClick={handleAddToCart}
        textColor='text-[#0F1111]'
        bgColor='bg-[#FFD814]'
        hoverBgColor='hover:bg-[#F7CA00]'
        rounded='rounded-full'
        disabled={!product.inStock}
        className='mt-2
        w-full 
        text-xs sm:text-sm
        py-1.5 px-4 sm:px-6
         border border-[#FCD200]'
    >{product.inStock ? isAdding ? 'Added' : 'Add to Cart' : 'Out of Stock'}</Button>
}

export default CartButton