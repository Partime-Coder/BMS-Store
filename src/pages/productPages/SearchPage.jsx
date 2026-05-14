import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useGetSearchProductsQuery } from '../../features/product/productApiSlice';
import { ProductCard } from '../../components';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const { data, isLoading, error } = useGetSearchProductsQuery(
    { query },
    { skip: !query }
  );

  if (!query) return <p className="p-4">Search something...</p>;
  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error</p>;

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Results for "{query}"</h1>

      {data?.products.length === 0 ? (
        <p>No results found</p>
      ) : (
        data.products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))
      )}
    </div>
  );
}

export default SearchPage;