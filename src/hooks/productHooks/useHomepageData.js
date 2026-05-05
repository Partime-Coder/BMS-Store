import { homepageConfig } from "../../config/homepageData";
import { useGetProductsQuery } from "../../features/product/productApiSlice";
import { renderSection } from "../../services/productServices/sectionDataService";



export const useHomepageData = () => {
    const { data, isLoading, isError, error } = useGetProductsQuery({
        limit: 194,
    });
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
    const products = data?.products || [];
    const sections = homepageConfig
        .map(section => renderSection(section, products))
        .filter(Boolean);

    return {
        sections,
        isLoading: false,
        isError: false,
        error: null,
    };
};  
