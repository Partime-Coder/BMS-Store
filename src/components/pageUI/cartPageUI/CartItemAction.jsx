import React, { useState } from 'react'
import { removeFromCart as removeFromCartService, updateQuantity } from '../../../services/cartServices/cartService'
import { removeFromCart, updateProductQuantity } from '../../../features/cart/cartSlice'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../../services/wishlistServices/wishlistService';
import { setWishlistState } from '../../../features/wishlist/wishlistSlice';

function CartItemAction({ productId, quantity, stock, minimumOrderQuantity, data }) {

    const [localQuantity, setLocalQuantity] = useState(quantity);
    const dispatch = useDispatch();

    const handleDecrease = (e) => {
        e.stopPropagation();
        if (localQuantity <= minimumOrderQuantity) {
            removeFromCartService(productId);
            dispatch(removeFromCart(productId));

            return;
        }
        const newQty = localQuantity - 1;
        updateQuantity(productId, newQty);
        dispatch(updateProductQuantity({ productId, quantity: newQty }));
        setLocalQuantity(newQty);
    };

    const handleIncrease = (e) => {
        e.stopPropagation();
        const newQty = Math.min(stock, localQuantity + 1);
        updateQuantity(productId, newQty);
        dispatch(updateProductQuantity({ productId, quantity: newQty }));
        setLocalQuantity(newQty);
    };

    const handleRemove = (e) => {
        e.stopPropagation();
        removeFromCartService(productId);
        dispatch(removeFromCart(productId));
    };

    const handleSave = (e) => {
        e.stopPropagation();
        const response = addToWishlist(data);
        console.log(response);
        dispatch(setWishlistState(response));
        removeFromCartService(productId);
        dispatch(removeFromCart(productId));

    };

    return (
        <div className="flex flex-col sm:flex-row gap-2.5 mt-3">


            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-gray-50 w-fit">
                <button
                    className="w-9 h-9 hover:bg-gray-200 transition-colors cursor-pointer"
                    onClick={handleDecrease}
                >−</button>

                <span className="w-10 text-center text-sm font-medium">
                    {localQuantity}
                </span>

                <button
                    className="w-9 h-9 hover:bg-gray-200 transition-colors cursor-pointer"
                    onClick={handleIncrease}
                    disabled={localQuantity >= stock}
                >+</button>
            </div>


            <div className="flex items-center gap-3">
                <button
                    className="text-xs sm:text-sm text-[#007185] hover:underline cursor-pointer"
                    onClick={handleSave}>
                    Save for later
                </button>
                <span className="text-gray-300 text-sm">|</span>
                <button
                    className="text-xs sm:text-sm text-red-600 hover:underline cursor-pointer"
                    onClick={handleRemove}
                >
                    Remove
                </button>
            </div>

        </div>
    )
}

export default CartItemAction