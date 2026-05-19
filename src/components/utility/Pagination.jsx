import React from "react";

function Pagination({
  currentPage,
  total,
  perPage = 10,
  onPageChange,
}) {
  const totalPages =
    Math.ceil(total / perPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">

      <button
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        disabled={currentPage === 1}
        className="
          px-4 py-2
          border rounded-lg
          disabled:opacity-50
          disabled:cursor-not-allowed
          hover:bg-gray-100
          transition
        "
      >
        Prev
      </button>

      {
        Array.from(
          { length: totalPages },
          (_, i) => i + 1
        ).map(page => (

          <button
            key={page}
            onClick={() =>
              onPageChange(page)
            }
            className={`
              px-4 py-2
              rounded-lg
              border
              transition

              ${
                currentPage === page
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }
            `}
          >
            {page}
          </button>

        ))
      }

      <button
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        disabled={
          currentPage === totalPages
        }
        className="
          px-4 py-2
          border rounded-lg
          disabled:opacity-50
          disabled:cursor-not-allowed
          hover:bg-gray-100
          transition
        "
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;