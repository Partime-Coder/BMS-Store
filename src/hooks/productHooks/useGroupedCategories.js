import { useMemo } from "react";
import { categoryGroupConfig } from "../../config/categoryGroupsData";
import { useGetProductsQuery } from "../../features/product/productApiSlice";

export const useGroupedCategories = (groupSlug) => {

  const { data, isLoading, isError, error } = useGetProductsQuery({ limit: 194 });

  const { groupedCategories, groupTitle } = useMemo(() => {
    if (!data?.products) return { groupedCategories: [], groupTitle: "" };

    const group = categoryGroupConfig.find((g) => g.slug === groupSlug);

  
    if (!group) return { groupedCategories: [], groupTitle: "" };

    const groupedCategories = data.products.filter((p) =>
      group.categories.includes(p.category)
    );

    return {
      groupedCategories,
      groupTitle: group.title,
    };
  }, [data, groupSlug]);

  return {
    groupedCategories,
    groupTitle,
    isLoading,
    isError,
    error: error ?? null,
  };
};