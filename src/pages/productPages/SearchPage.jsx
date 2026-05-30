import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useGetSearchProductsQuery } from '../../features/product/productApiSlice';
import { ProductCard, Pagination, Loader } from '../../components';
import usePagination from '../../hooks/productHooks/usePagination';

function SearchPage() {
  const [searchParams] = useSearchParams();

  const query =
    searchParams.get('q');

  const {
    page,
    limit,
    skip,
    changePage
  } = usePagination();

  const {
    data,
    isLoading,
    error
  } = useGetSearchProductsQuery(
    {
      query,
      limit,
      skip
    },
    {
      skip: !query
    }
  );

  if (!query)
    return (
      <div className="flex flex-1 items-center justify-center min-h-screen">
        Search Something ...
      </div>
    );

  if (isLoading)
    return (
      <div className="flex flex-1 items-center justify-center min-h-screen">
        <Loader />
      </div>
    );

  if (error)
    return (
      <p className="p-4 text-red-500">
        Error
      </p>
    );

  return (
    <div className="p-4 flex flex-col gap-4">

      <h1 className="text-xl font-semibold">
        Results for "{query}"
      </h1>

      {data?.products.length === 0 ? (

        <p>No results found</p>

      ) : (

        <>
          {data.products.map(product => (

            <ProductCard
              key={product.id}
              product={product}
              
            />
          ))}

          <Pagination
            total={data.total}
            currentPage={page}
            onPageChange={changePage}
          />

        </>

      )}

    </div>
  );
}

export default SearchPage;