
import { useMemo } from "react";
import { homepageConfig } from "../../config/homepageData";
import { useGetProductsQuery } from "../../features/product/productApiSlice";
import { renderSection } from "../../services/productServices/sectionDataService";

export const useHomepageData = () => {
  
  const { data, isLoading, isError, error } = useGetProductsQuery({ limit: 194 });

  
  const sections = useMemo(() => {
    if (!data?.products) return [];
    return homepageConfig
      .map((section) => renderSection(section, data.products))
      .filter(Boolean);
  }, [data]);

  return {
    sections,
    isLoading,
    isError,
    error: error ?? null,
  };
};