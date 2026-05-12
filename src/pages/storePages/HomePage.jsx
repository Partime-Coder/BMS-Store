import React, { useEffect } from 'react'
import { useHomepageData } from '../../hooks/productHooks/useHomepageData';
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container} from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';




function HomePage() {

  // const {sections, products, isLoading ,isError , error} = useCategorypageData("electronics")
  //  console.log("Categorypage test data", { sections, products, isLoading, isError, error });

  //  const laptopSection = sections.find(s => s.id === "laptops-grid")
  //  const tabSection = sections.find(s => s.id === "mobile-accessories-grid")
  //  const smartSection = sections.find(s => s.id === "smartphones-slider")




  const { sections, isLoading, isError, error } = useHomepageData();
  console.log("homepage test data", { sections, isLoading, isError, error });


  return (
    <>
    <HeroSlider slides={heroSliderConfig.home} />
    <Container>
    <div className='flex flex-col gap-5' >
      <GridLayout>
        <GridItem>
          <ProductGridCard sections={sections} title={ "smartphones"} isLoading={isLoading} id={ "smartphones-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={"mobile-accessories-grid"} isLoading={isLoading} id={"mobile-accessories-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={"furniture"} isLoading={isLoading} id={"furniture-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={"groceries"} isLoading={isLoading} id={"groceries-grid"} />
        </GridItem>
      </GridLayout>
      <GridLayout>
        <GridItem>
          <ProductGridCard sections={sections} title={ "smartphones"} isLoading={isLoading} id={ "smartphones-grid"} />
        </GridItem>
        <GridItem>
          <ProductGridCard sections={sections} title={"mobile-accessories-grid"} isLoading={isLoading} id={"mobile-accessories-grid"} />
        </GridItem>
        <GridItem span='col-span-2'>
         <ProductBannerCard id={"hero-banner"} sections={sections} isLoading={isLoading}/>
        </GridItem>
      </GridLayout>
      <ProductSliderCard sections={sections} id={"smartphones-slider"} title={"Latest Smartphone"} isLoading={isLoading}/>
      <ProductSliderCard sections={sections} id={"mobile-accessories-slider"} title={'Make your life Easy'} isLoading={isLoading}/>
    </div>
    </Container>
    </>
  )
}

export default HomePage