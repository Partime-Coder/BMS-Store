import React, { useState } from 'react'
import { removeFromCart as removeFromCartService, updateQuantity } from '../../../services/cartServices/cartService'
import { removeFromCart, updateProductQuantity } from '../../../features/cart/cartSlice'
import { useDispatch } from 'react-redux';

function CartItemAction({ productId, quantity, stock, minimumOrderQuantity }) {

    const [localQuantity, setLocalQuantity] = useState(quantity);
    const dispatch = useDispatch();

    const handleDecrease = () => {
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

    const handleIncrease = () => {
        const newQty = Math.min(stock, localQuantity + 1);
        updateQuantity(productId, newQty);
        dispatch(updateProductQuantity({ productId, quantity: newQty }));
        setLocalQuantity(newQty);
    };

    const handleRemove = () => {
        removeFromCartService(productId);
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="flex flex-wrap items-center gap-3 mt-3">

            {/* Quantity */}
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-gray-50">
                <button
                    className="w-9 h-9 hover:bg-gray-200 transition-colors"
                    onClick={handleDecrease}
                //   disabled={localQuantity <= minimumOrderQuantity}
                >−</button>

                <span className="w-10 text-center text-sm font-medium">
                    {localQuantity}
                </span>

                <button
                    className="w-9 h-9 hover:bg-gray-200 transition-colors"
                    onClick={handleIncrease}
                    disabled={localQuantity >= stock}
                >+</button>
            </div>

            {/* Save for later */}
            <button className="text-xs sm:text-sm text-[#007185] hover:underline">
                Save for later
            </button>

            {/* Remove */}
            <button
                className="text-xs sm:text-sm text-red-600 hover:underline"
                onClick={handleRemove}
            >
                Remove
            </button>

        </div>
    )
}

export default CartItemAction