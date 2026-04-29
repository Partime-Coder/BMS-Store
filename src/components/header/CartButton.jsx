import React from "react";

function CartButton({
  count = 0,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`relative p-2 rounded-lg hover:bg-gray-100 transition ${className}`}
    >
      {/* Cart Icon (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>

      {/* Badge */}
      {count > 0 && (
        <span
          className="
            absolute
            -top-1 -right-1
            bg-red-500
            text-white
            text-xs
            font-semibold
            px-1.5
            py-0.5
            rounded-full
            min-w-4.5
            text-center
          "
        >
          {count}
        </span>
      )}
    </button>
  );
}

export default CartButton;