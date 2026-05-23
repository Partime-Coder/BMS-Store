import React from "react";

function Pagination({
  currentPage,
  total,
  perPage = 10,
  onPageChange
}) {
  const totalPages =
    Math.ceil(total / perPage);

  if (totalPages <= 1)
    return null;

  const pages = [];

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 &&
       i <= currentPage + 1)
    ) {
      pages.push(i);
    }

    else if (
      pages[
        pages.length - 1
      ] !== "..."
    ) {
      pages.push("...");
    }
  }

  return (

    <div className="
      flex
      items-center
      justify-center
      gap-4
      mt-8
      text-sm
    ">

      <button
        disabled={currentPage===1}
        onClick={() =>
          onPageChange(
            currentPage-1
          )
        }
        className="
        disabled:opacity-40
        "
      >
        Prev
      </button>

      {pages.map(
        (page,index)=>

        page==="..." ?

        (
          <span key={index}>
            ...
          </span>
        )

        :

        (
          <button
            key={page}
            onClick={() =>
              onPageChange(page)
            }
            className={
             currentPage===page
             ?
             "font-bold underline"
             :
             ""
            }
          >
            {page}
          </button>
        )

      )}

      <button
        disabled={
          currentPage===
          totalPages
        }
        onClick={() =>
          onPageChange(
            currentPage+1
          )
        }
        className="
        disabled:opacity-40
        "
      >
        Next
      </button>

    </div>

  );
}

export default Pagination;