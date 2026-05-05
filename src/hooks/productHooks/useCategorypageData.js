import { categoryPageConfig } from "../../config/categorypageData";
import { renderSection } from "../../services/productServices/sectionDataService";
import { useGroupedCategories } from "./useGroupedCategories";

export const useCategorypageData = (groupSlug) => {
    const { groupedCategories, groupTitle, isLoading, isError, error } = useGroupedCategories(groupSlug);
    if (isLoading) {
        return {
            sections: [],
            isLoading: true,
            isError: false,
            error: null,
        };
    }
    if (isError) {
        console.error("Home Page Error:", error);
        return {
            sections: [],
            isLoading: false,
            isError: true,
            error,
        };
    }
    const products = groupedCategories || [];
     const category = categoryPageConfig[groupSlug] || [];

      const sections = category
             .map(section => renderSection(section, products))
             .filter(Boolean);
    
        return {
            sections,
            products,
            isLoading: false,
            isError: false,
            error: null,
        };

};