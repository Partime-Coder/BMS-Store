import React from 'react'
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container, ProductVerticalCard } from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';

function ElectronicsPage() {
  const { sections, products, isLoading, isError, error } = useCategorypageData("electronics")


  return (
    <>
      <HeroSlider slides={heroSliderConfig.home} />
      <Container>
        <div className='flex flex-col gap-5' >
          <GridLayout>
            <GridItem>
              <ProductGridCard sections={sections} title={"Deals on Apple Smartphones"} isLoading={isLoading} id={"apple-grid"} />
            </GridItem>
            <GridItem>
              <ProductGridCard sections={sections} title={"Latest Realme Smartphones"} isLoading={isLoading} id={"realme-grid"} />
            </GridItem>
            <GridItem>
              <ProductGridCard sections={sections} title={"Apple Accessories"} isLoading={isLoading} id={"apple-accessories-grid"} />
            </GridItem>
            <GridItem>
              <ProductGridCard sections={sections} title={"For your Photography"} isLoading={isLoading} id={"tripod-accessories-grid"} />
            </GridItem>
          </GridLayout>

          <GridLayout>
            <GridItem>
              <ProductGridCard sections={sections} title={"Smart Laptops "} isLoading={isLoading} id={"laptop-grid"} />
            </GridItem>
            <GridItem>
              <ProductGridCard sections={sections} title={"New gen Tablets"} isLoading={isLoading} id={"tablet-grid"} />
            </GridItem>
            <GridItem span='col-span-1 sm:col-span-2'>
              <ProductBannerCard id={"Electronics-banner"} sections={sections} isLoading={isLoading} />
            </GridItem>
          </GridLayout>

          <ProductSliderCard sections={sections} id={"smartphones-slider"} title={"Latest Smartphone"} isLoading={isLoading} />

          <ProductSliderCard sections={sections} id={"mobile-accessories-slider"} title={'Make your life Easy'} isLoading={isLoading} />

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

export default ElectronicsPage