import axios from "axios";

const ProductAPI = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});

const normalizeProduct = (raw) => ({
  id: raw.id,
  title: raw.title,
  description: raw.description,
  price: raw.price,
  discountPercentage: raw.discountPercentage,
  discountedPrice: +(
    raw.price *
    (1 - raw.discountPercentage / 100)
  ).toFixed(2),
  rating: raw.rating,
  stock: raw.stock,
  brand: raw.brand ?? "Unknown",
  category: raw.category,
  thumbnail: raw.thumbnail,
  images: raw.images ?? [],
  inStock: raw.stock > 0,
});

export const getProducts = async ({
  limit = 20,
  skip = 0,
} = {}) => {
  const response = await ProductAPI.get(
    `/products?limit=${limit}&skip=${skip}`
  );

  return {
    products: response.data.products.map(
      normalizeProduct
    ),
    total: response.data.total,
  };
};

export const getProductById = async (id) => {
  if (!id) {
    throw new Error("Product ID is required");
  }

  const response = await ProductAPI.get(
    `/products/${id}`
  );

  return normalizeProduct(response.data);
};

export const searchProducts = async (
  query,
  { limit = 20, skip = 0 } = {}
) => {
  if (!query?.trim()) {
    throw new Error(
      "Search query is required"
    );
  }

  const response = await ProductAPI.get(
    `/products/search?q=${encodeURIComponent(
      query.trim()
    )}&limit=${limit}&skip=${skip}`
  );

  return {
    products: response.data.products.map(
      normalizeProduct
    ),
    total: response.data.total,
  };
};

export const getCategories = async () => {
  const response = await ProductAPI.get(
    "/products/categories"
  );

  return response.data;
};

export const getProductsByCategory = async (
  category,
  { limit = 20, skip = 0 } = {}
) => {
  if (!category) {
    throw new Error("Category is required");
  }

  const response = await ProductAPI.get(
    `/products/category/${category}?limit=${limit}&skip=${skip}`
  );

  return {
    products: response.data.products.map(
      normalizeProduct
    ),
    total: response.data.total,
  };
};
