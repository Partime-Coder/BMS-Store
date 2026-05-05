import { filterBySlug } from "./productService";

const createBanner = ({
  id,
  title,
  subtitle,
  ctaText = "Shop Now",
  ctaLink = "/",
}) => ({
  id,
  type: "banner",
  title: null,
  viewAllLink: null,
  data: {
    title,
    subtitle,
    ctaText,
    ctaLink,
  },
});

const createSlider = ({
  id,
  title,
  products = [],
  slug,
  limit = 10,
  viewAllLink = "/",
}) => {
  const filtered = slug ? filterBySlug(products, slug) : products;
  const sliced = filtered.slice(0, limit);

  return {
    id,
    type: "slider",
    title,
    viewAllLink,
    data: {
      products: sliced,
      total: filtered.length,
    },
  };
};

const createGrid = ({
  id,
  title,
  products = [],
  slug,
  limit = 4,
  viewAllLink = "/",
}) => {
  const filtered = slug ? filterBySlug(products, slug) : products;
  const sliced = filtered.slice(0, limit);

  return {
    id,
    type: "grid",
    title,
    viewAllLink,
    data: {
      products: sliced,
      total: filtered.length,
    },
  };
};

const sectionMap = {
  banner: createBanner,
  slider: createSlider,
  grid: createGrid,
};

export const renderSection = (section, products) => {
  const handler = sectionMap[section.type];

  if (!handler) {
    console.warn("Unknown section type:", section.type);
    return null;
  }

  return handler({
    ...section,
    products,
  });
};