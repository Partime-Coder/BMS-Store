import React, { useRef } from 'react'
import { Loader } from '../index.js'

function ProductSliderCard({ id, title, sections, linkText = "See more", viewAllLink , isLoading }) {
  const section = sections.find(s => s.id === id)
  const products = section?.data?.products ?? []
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const amount = 300
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <div className="bg-white p-4 ">

      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <span className="text-sm text-blue-600 cursor-pointer hover:underline hover:text-orange-500">
          {linkText}
        </span>
      </div>

      {/* Slider wrapper — relative so buttons can sit on edges */}
      <div className="relative group">

        {/* Left button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ‹
        </button>

        {/* Scrollable row — native scrollbar visible */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth pb-2"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#ccc transparent",
          }}
        >
          {isLoading ? (
            <div className="w-full flex justify-center items-center min-h-42">
              <Loader />
            </div>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-32 sm:w-40 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ›
        </button>

      </div>

    </div>
  )
}

export default ProductSliderCard