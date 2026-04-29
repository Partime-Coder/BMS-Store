import { useEffect, useState } from "react";
import { searchProducts } from "../../services/productServices/productService";

export default function useSearchProducts(
  query,
  { limit = 20, skip = 0 } = {}
) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    
    if (!query?.trim()) {
      setProducts([]);
      setTotal(0);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    const timer = setTimeout(() => {
      searchProducts(query, {
        limit,
        skip,
      })
        .then((data) => {
          setProducts(data.products);
          setTotal(data.total);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 400);

    return () => clearTimeout(timer);
  }, [query, limit, skip]);

  return {
    products,
    total,
    loading,
    error,
  };
}