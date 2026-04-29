import { useEffect, useState } from "react";
import {
  getProducts,
  getCategories,
  getProductsByCategory,
} from "../../services/productServices/productService";

export default function useProducts({
  category = null,
  limit = 20,
  skip = 0,
} = {}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  useEffect(() => {
    setLoading(true);
    setError("");

    const fetchProducts = category
      ? getProductsByCategory(category, {
          limit,
          skip,
        })
      : getProducts({
          limit,
          skip,
        });

    fetchProducts
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
  }, [category, limit, skip]);


  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return {
    products,
    categories,
    total,
    loading,
    error,
  };
}
