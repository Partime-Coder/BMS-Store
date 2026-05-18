import {
  electronicIphone13,
  electronicHeadphone,
  groceriesMain,
  menSummer,
  womenSummer,
} from '../assets/images/index.js'

export const heroSliderConfig = {
  home:[
  {
    id: 1,
    title: "iPhone 13 Pro",
    subtitle: "Experience power, style & innovation",
    image: electronicIphone13,
    bgColor: "#DBEAFE",
    titleColor: "#1E3A8A",
    subtitleColor: "#2563EB",
    ctaText: "Explore Now",
    ctaLink: "/electronics",
  },

  {
    id: 2,
    title: "Beauty Essentials",
    subtitle: "Glow every day with premium care",
    image:
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp",
    bgColor: "#FDF2F8",
    titleColor: "#BE185D",
    subtitleColor: "#DB2777",
    ctaText: "Shop Beauty",
    ctaLink: "/beauty",
  },

  {
    id: 3,
    title: "BMS Fresh",
    subtitle: "Farm-fresh groceries delivered daily",
    image: groceriesMain,
    bgColor: "#ECFDF5",
    titleColor: "#166534",
    subtitleColor: "#16A34A",
    ctaText: "Shop Fresh",
    ctaLink: "/groceries",
  },

  {
    id: 4,
    title: "Summer Men's Collection",
    subtitle: "Stay cool. Stay stylish.",
    image: menSummer,
    bgColor: "#FEF3C7",
    titleColor: "#92400E",
    subtitleColor: "#D97706",
    ctaText: "Shop Men",
    ctaLink: "/category/mens-fashion",
  },

  {
    id: 5,
    title: "Women's Summer Edit",
    subtitle: "Fresh styles made for sunny days",
    image: womenSummer,
    bgColor: "#FFF1F2",
    titleColor: "#9F1239",
    subtitleColor: "#E11D48",
    ctaText: "Shop Women",
    ctaLink: "/category/womens-fashion",
  },
],

  beauty: [],
  electronics: [],
  "mens-fashion": [],
  "womens-fashion": [],
  groceries: [],
  "home-living": [],
  vehicles: [],
  sports: [],
}