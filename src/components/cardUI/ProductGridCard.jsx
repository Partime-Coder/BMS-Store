import React from 'react'

function ProductGridCard({
  title,
  items = [],
  linkText = "Explore all",
  onClickItem,
}) {
  return (
    <div className="bg-white p-4 rounded shadow-sm flex flex-col gap-3">

      {/* Title */}
      <h2 className="text-base font-semibold text-gray-900">
        {title}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {items.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-1 cursor-pointer"
            onClick={() => onClickItem?.(item)}
          >
            {/* Image */}
            <div className="w-full aspect-square bg-gray-100 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full object-contain"
              />
            </div>

            {/* Title */}
            <p className="text-xs text-gray-800 line-clamp-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <button className="text-sm text-[#007185] text-left hover:underline mt-1">
        {linkText}
      </button>
    </div>
  );
}

export default ProductGridCard