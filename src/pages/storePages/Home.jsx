import React, { useEffect } from 'react'
import { useHomepageData } from '../../hooks/productHooks/useHomepageData';

import { useGetCategoriesQuery , useGetProductsByCategoryQuery } from '../../features/product/productApiSlice';
import { useGroupedCategories } from '../../hooks/productHooks/useGroupedCategories';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';




function Home() {

  // const {sections, products, isLoading ,isError , error} = useCategorypageData("electronics")
  //  console.log("Categorypage test data", { sections, products, isLoading, isError, error });
  // const {data, error, isLoading } = useGetCategoriesQuery();
  // console.log("category" ,data);
// const { groupedCategories, groupTitle, isLoading, isError, error } = useGroupedCategories("vehicles");
//  console.log("homepage test data", { groupedCategories, groupTitle, isLoading, isError, error });
  
  
    // const { sections, isLoading, isError, error } = useHomepageData();
    // console.log("homepage test data", { sections, isLoading, isError, error });
    

  return (
     <div className='flex flex-col items-center'>
        
     </div>
  )
} 

export default Home