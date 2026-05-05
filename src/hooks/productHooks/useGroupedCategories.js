import { categoryGroupConfig } from "../../config/categoryGroupsData";
import { useGetProductsQuery } from "../../features/product/productApiSlice";

export const useGroupedCategories = (groupSlug) => {
  const { data, isLoading, isError, error } = useGetProductsQuery({
    limit: 194,
  });

  const products = data?.products || [];

  const group = categoryGroupConfig.find(
    g => g.slug === groupSlug
  );

  if (!group) {
    return {
      groupedCategories: [],
      isLoading,
      isError,
      error,
    };
  }

  const groupedCategories = products.filter(product =>
    group.categories.includes(product.category)
  );

  return {
    groupedCategories,
    groupTitle: group.title,
    isLoading,
    isError,
    error,
  };
};
