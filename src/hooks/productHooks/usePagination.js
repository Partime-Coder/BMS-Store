import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function usePagination(limit = 10) {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(
      searchParams.get("page")
    ) || 1;

  const skip =
    (page - 1) * limit;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [page]);

  const changePage = (newPage) => {
    const params =
      new URLSearchParams(
        searchParams
      );

    params.set(
      "page",
      newPage
    );

    setSearchParams(params);
  };

  return {
    page,
    limit,
    skip,
    changePage
  };
}

export default usePagination;