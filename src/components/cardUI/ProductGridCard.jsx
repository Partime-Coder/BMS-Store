import React from 'react'
import {Loader} from '../index.js'
import { Link } from 'react-router'


function ProductGridCard({ id, sections, title, isLoading }) {
  const section = sections.find(s => s.id === id)
  const products = section?.data?.products ?? []

  return (
    <div className="bg-white p-4 w-full flex flex-col min-h-122.5 sm:min-h-104">

      <h3 className="text-lg font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 w-full flex-1">
          {products.map((product) => (
            <Link key={product.id}
              to={`/product/${product.id}`} >
              <div className="aspect-square overflow-hidden mb-1">
                <img
                  src={product.thumbnail}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <p className="text-xs truncate">{product.title}</p>
            </Link>
          ))}
        </div>
      )}

      <p className="mt-4 text-sm text-blue-600 cursor-pointer hover:underline hover:text-amber-500">
        explore more
      </p>

    </div>
  )
}

export default ProductGridCard