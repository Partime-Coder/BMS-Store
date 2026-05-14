
export const normalizeProduct = (raw) => ({
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
  availabilityStatus: raw.availabilityStatus ?? "Unknown",
  warrantyInformation: raw.warrantyInformation ?? null,
  shippingInformation: raw.shippingInformation ?? null,
  returnPolicy: raw.returnPolicy ?? null,
  minimumOrderQuantity: raw.minimumOrderQuantity ?? 1,
  tags: raw.tags ?? [],
  reviews: raw.reviews ?? [],
  weight: raw.weight ?? null,
  dimensions: raw.dimensions ?? null,
});

export const filterBySlug = (products = [], slug) =>
  products.filter((p) => p.category === slug);

