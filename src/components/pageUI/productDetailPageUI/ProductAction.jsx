import React, { useState } from 'react'
import { CartButton, WishlistButton } from '../../index.js'

function ProductAction({ product }) {
  const [qty, setQty] = useState(1)

  return (
    <div className="border border-gray-200 rounded-xl p-3 flex flex-col gap-2.5 mt-auto">

      {/* Qty selector */}
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span>Qty:</span>
        <button
          onClick={() => setQty(q => Math.max(1, q - 1))}
          className="w-7 h-7 rounded border border-gray-200 bg-gray-100 text-lg leading-none cursor-pointer"
        >−</button>
        <span className="font-medium text-gray-900 w-5 text-center">{qty}</span>
        <button
          onClick={() => setQty(q => Math.min(product.stock, q + 1))}
          className="w-7 h-7 rounded border border-gray-200 bg-gray-100 text-lg leading-none cursor-pointer"
        >+</button>
      </div>
      <div className=" w-full flex flex-col md:flex-row gap-2.5 ">
        
        <CartButton product={product} quantity={qty} />
        
        <WishlistButton product={product} />
      </div>
    </div>
  )
}

export default ProductAction