import { filterBySlug } from "./productService";

const createBanner = ({
  id,
  title,
  subtitle,
  image,
  ctaText = "Shop Now",
  ctaLink = "/",
  bgColor,
  titleColor,
  subtitleColor,
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
    image,
    bgColor,
    titleColor,
    subtitleColor
  },
});

const createSlider = ({
  id,
  title,
  products = [],
  slug,
  limit = 12,
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
  start = 0,
  limit = 4,
  viewAllLink = "/",
}) => {
  const filtered = slug
    ? filterBySlug(products, slug)
    : products;

  const sliced = filtered.slice(
    start,
    start + limit
  );

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