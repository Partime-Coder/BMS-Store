// src/hooks/productHooks/useCategorypageData.js

import { useMemo } from "react";
import { categoryPageConfig } from "../../config/categorypageData";
import { categoryGroupConfig } from "../../config/categoryGroupsData";
import { useGetProductsQuery } from "../../features/product/productApiSlice";
import { renderSection } from "../../services/productServices/sectionDataService";

export const useCategorypageData = (groupSlug) => {
  
  const { data, isLoading, isError, error } = useGetProductsQuery({ limit: 194 });

  const { sections, products } = useMemo(() => {

    if (!data?.products) return { sections: [], products: [] };

    const group = categoryGroupConfig.find((g) => g.slug === groupSlug);
    if (!group) return { sections: [], products: [] };

   
    const groupedProducts = data.products.filter((p) =>
      group.categories.includes(p.category)
    );

    
    const categoryConfig = categoryPageConfig[groupSlug] ?? [];

   
    const builtSections = categoryConfig
      .map((section) => renderSection(section, groupedProducts))
      .filter(Boolean);

    return {
      sections: builtSections,
      products: groupedProducts,
    };
  }, [data, groupSlug]);


  return {
    sections,
    products,
    isLoading,
    isError,
    error: error ?? null,
  };
};