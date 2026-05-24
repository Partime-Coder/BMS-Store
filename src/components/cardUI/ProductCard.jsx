import React from 'react'
import { addToCart } from '../../services/cartServices/cartService';
import { CartButton } from '../index.js'
import { useNavigate } from 'react-router';


function ProductCard({ product }) {
    const navigate = useNavigate();
    if (!product) return null;

    const {
        title,
        description,
        price,
        discountPercentage,
        discountedPrice,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        inStock,
    } = product;


    return (
        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="
    flex gap-3 sm:gap-4
    bg-white border border-gray-200 rounded-lg
    p-3 sm:p-4
    hover:shadow-md transition-shadow cursor-pointer
  "
        >
            {/* Image */}
            <div className="shrink-0 w-28 h-28 sm:w-44 sm:h-44 flex items-center justify-center bg-gray-50 rounded">
                <img
                    src={thumbnail}
                    alt={title}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                        e.target.src =
                            'https://via.placeholder.com/160x160?text=No+Image';
                    }}
                />
            </div>

            {/* Details */}
            <div className="flex flex-col flex-1 min-w-0 gap-1">

                {/* Title */}
                <h3 className="text-sm sm:text-base font-medium leading-snug line-clamp-2 hover:text-[#C7511F]">
                    {title}
                </h3>

                {/* Brand */}
                <p className="text-[11px] sm:text-xs text-gray-500">
                    by <span className="text-[#007185]">{brand}</span>
                    {' · '}
                    <span className="capitalize">{category}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mt-1">
                    {description}
                </p>

                {/* Price */}
                <div className="mt-1">
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg sm:text-2xl font-medium text-[#0F1111]">
                            <sup className="text-[15px] sm:text-sm align-super">$</sup>
                            {discountedPrice.toFixed(2)}
                        </span>

                        {discountPercentage > 0 && (
                            <span className="text-[11px] sm:text-sm text-gray-500 line-through">
                                ${price.toFixed(2)}
                            </span>
                        )}

                        {discountPercentage > 0 && (
                            <span className="text-[11px] sm:text-sm text-red-600 font-medium">
                                -{Math.round(discountPercentage)}%
                            </span>
                        )}
                    </div>
                </div>

                {/* Delivery */}
                <p className="text-[11px] sm:text-sm text-gray-700 mt-1">
                    <span className="font-medium">FREE delivery</span>
                </p>

                {/* Stock */}
                <p
                    className={`text-[11px] sm:text-sm ${inStock ? 'text-[#007600]' : 'text-red-600'
                        }`}
                >
                    {inStock ? 'In Stock' : 'Out of Stock'}
                </p>

                {/* Button */}
                <CartButton product={product} />
            </div>
        </div>
    );
}

export default ProductCard