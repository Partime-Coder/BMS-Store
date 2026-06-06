import React from 'react'
import { useNavigate } from 'react-router'
import {RemoveFromWishlistButton} from '../../index.js'

function WishlistItemCard({ product }) {
    const navigate = useNavigate();
    if (!product) return null;
    const {
        productId,
        name,
        description,
        price,
        discountedPrice,
        discountPercentage,
        image,
    } = product;
    return (
         <div
            onClick={() => navigate(`/product/${productId}`)}
            className="
            bg-white border border-gray-200 
            p-3 cursor-pointer
            hover:shadow-md transition-shadow
            flex flex-col h-full
            "
        >
            {/* Image */}
            <div className="h-52  flex items-center justify-center p-3">
                <img
                    src={image}
                    alt={name}
                    className="max-h-full object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 mt-3">

                <h3 className="text-lg font-medium line-clamp-2 ">
                    {name}
                </h3>

                <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                    {description}
                </p>

                <div className="mt-3 flex items-center gap-2 flex-wrap">

                    <span className="text-xl font-medium">
                        ${discountedPrice.toFixed(2)}
                    </span>

                    <span className="text-sm text-gray-500 line-through">
                        ${price.toFixed(2)}
                    </span>

                    <span className="text-sm text-red-600 font-medium">
                        -{Math.round(discountPercentage)}%
                    </span>

                </div>
                <div className="mt-auto pt-4">
                   <RemoveFromWishlistButton productId={productId}/>
                </div>

            </div>
        </div>
    )
}

export default WishlistItemCard