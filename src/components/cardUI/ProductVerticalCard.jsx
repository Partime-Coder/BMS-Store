import React from 'react'
import { CartButton } from '../index.js'
import { useNavigate } from 'react-router';

function ProductVerticalCard({ product }) {

    const navigate = useNavigate();


    if (!product) return null;

    const {
        id,
        title,
        description,
        price,
        discountedPrice,
        discountPercentage,
        thumbnail,
    } = product;

    return (
        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="
            bg-white border border-gray-200 
            p-3
            hover:shadow-md transition-shadow
            flex flex-col h-full
            "
        >
            {/* Image */}
            <div className="h-52  flex items-center justify-center p-3">
                <img
                    src={thumbnail}
                    alt={title}
                    className="max-h-full object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 mt-3">

                <h3 className="text-sm font-medium line-clamp-2 ">
                    {title}
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
                   <CartButton product={product} />
                </div>

            </div>
        </div>
    );
}

export default ProductVerticalCard;