import React from 'react'
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container, ProductVerticalCard } from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';

function GroceriesPage() {
   const { sections, products, isLoading, isError, error } = useCategorypageData("groceries")
   return (
      <>
         <HeroSlider slides={heroSliderConfig.home} />
         <Container>
            <div className='flex flex-col gap-5' >
               <GridLayout>
                  <GridItem>
                     <ProductGridCard sections={sections} title={"Top Deals in Groceries"} isLoading={isLoading} id={"groceries-1-grid"} />
                  </GridItem>
                  <GridItem>
                     <ProductGridCard sections={sections} title={"Customers’ Favorite Picks"} isLoading={isLoading} id={"groceries-2-grid"} />
                  </GridItem>
                  <GridItem>
                     <ProductGridCard sections={sections} title={"Home Essentials"} isLoading={isLoading} id={"groceries-3-grid"} />
                  </GridItem>
                  <GridItem>
                     <ProductGridCard sections={sections} title={"Value Deals for You"} isLoading={isLoading} id={"groceries-4-grid"} />
                  </GridItem>
               </GridLayout>

               <ProductSliderCard sections={sections} id={"groceries-slider"} title={"Recommended for Your Home"} isLoading={isLoading} />

               <GridLayout isProductGrid={true}>
                  {products?.map((product) => (
                     <GridItem key={product.id}>
                        <ProductVerticalCard
                           product={product}
                        />
                     </GridItem>
                  ))}
               </GridLayout>
            </div>
         </Container>
      </>
   )
}

export default GroceriesPage