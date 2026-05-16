import React, { useEffect } from 'react'
import { useHomepageData } from '../../hooks/productHooks/useHomepageData';
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container} from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';




function HomePage() {

  // const {sections, products, isLoading ,isError , error} = useCategorypageData("electronics")
  //  console.log("Categorypage test data", { sections, products, isLoading, isError, error });





  const { sections, isLoading, isError, error } = useHomepageData();
  console.log("homepage test data", { sections, isLoading, isError, error });


  return (
    <>
    <HeroSlider slides={heroSliderConfig.home} />
    <Container>
    <div className='flex flex-col gap-5' >
      <GridLayout>
        <GridItem>
          <ProductGridCard sections={sections} title={ "Beauty Products"} isLoading={isLoading} id={ "beauty-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={ "Trending Electonics"} isLoading={isLoading} id={ "electronics-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={ "Latest Men's Fashion"} isLoading={isLoading} id={ "mens-fashion-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={ "Latest Women's Fashion"} isLoading={isLoading} id={ "womens-fashion-grid"} />
        </GridItem>
      </GridLayout>

      <GridLayout>
        <GridItem>
          <ProductGridCard sections={sections} title={ "BMS Fresh Section"} isLoading={isLoading} id={ "groceries-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={ "For Your Home"} isLoading={isLoading} id={ "home-living-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={ "Newly Lauched"} isLoading={isLoading} id={ "vehicles-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={ "For All kinda Sports"} isLoading={isLoading} id={ "sports-grid"} />
        </GridItem>
      </GridLayout>
      
      <ProductSliderCard sections={sections} id={"smartphones-slider"} title={"Latest Smartphone"} isLoading={isLoading}/>
      
      <GridLayout>
        <GridItem>
          <ProductGridCard sections={sections} title={ "Smart Laptops "} isLoading={isLoading} id={ "laptop-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={"New gen Tablets"} isLoading={isLoading} id={"tablet-grid"} />
        </GridItem>
        <GridItem span='col-span-1 sm:col-span-2'>
         <ProductBannerCard id={"hero-banner"} sections={sections} isLoading={isLoading}/>
        </GridItem>
      </GridLayout>

      <ProductSliderCard sections={sections} id={"mobile-accessories-slider"} title={'Make your life Easy'} isLoading={isLoading}/>
      
      <GridLayout>
         <GridItem>
          <ProductGridCard sections={sections} title={ "Smart Laptops "} isLoading={isLoading} id={ "beautyProducts-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={"New gen Tablets"} isLoading={isLoading} id={"skincare-grid"} />
        </GridItem>
        <GridItem span='col-span-1 sm:col-span-2'>
         <ProductBannerCard id={"hero-banner"} sections={sections} isLoading={isLoading}/>
        </GridItem>
      </GridLayout>

       <GridLayout>
        <GridItem>
          <ProductGridCard sections={sections} title={ "Women's Watches"} isLoading={isLoading} id={ "womens-watches-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={ "Women's Shoes"} isLoading={isLoading} id={ "womens-shoes-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={ "Lavish Bags"} isLoading={isLoading} id={ "womens-bags-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={ "Trendy Tops"} isLoading={isLoading} id={ "womens-tops-grid"} />
        </GridItem>
      </GridLayout>

       <GridLayout>
         <GridItem>
          <ProductGridCard sections={sections} title={ "Men's Watches"} isLoading={isLoading} id={ "mens-watches-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={"Men's Shoes"} isLoading={isLoading} id={"mens-shoes-grid"} />
        </GridItem>
        <GridItem span='col-span-1 sm:col-span-2'>
         <ProductBannerCard id={"hero-banner"} sections={sections} isLoading={isLoading}/>
        </GridItem>
      </GridLayout>

      <ProductSliderCard sections={sections} id={"groceries-slider"} title={'See Fresh Groceries'} isLoading={isLoading}/>
      
      <ProductSliderCard sections={sections} id={"kitchen-accessories-slider"} title={'For Your Kitchen'} isLoading={isLoading}/>

      <GridLayout>
         <GridItem>
          <ProductGridCard sections={sections} title={ "Latest Bikes"} isLoading={isLoading} id={ "bike-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={"Latest Cars"} isLoading={isLoading} id={"car-grid"} />
        </GridItem>
        <GridItem span='col-span-1 sm:col-span-2'>
         <ProductBannerCard id={"hero-banner"} sections={sections} isLoading={isLoading}/>
        </GridItem>
      </GridLayout>

       <ProductSliderCard sections={sections} id={"sports-slider"} title={'Be the next Star'} isLoading={isLoading}/>
    </div>
    </Container>
    </>
  )
}

export default HomePage