import React from 'react'
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container, ProductVerticalCard } from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';

function BeautyPage() {
  const { sections, products, isLoading, isError, error } = useCategorypageData("beauty")
  return (
    <>
      <HeroSlider slides={heroSliderConfig.home} />
      <Container>
        <div className='flex flex-col gap-5' >
          <GridLayout>
            <GridItem>
              <ProductGridCard sections={sections} title={"Everyday Beauty "} isLoading={isLoading} id={"beauty-grid"} />
            </GridItem>
            <GridItem>
              <ProductGridCard sections={sections} title={"Skincare Must-Haves"} isLoading={isLoading} id={"skincare-grid"} />
            </GridItem>
            <GridItem span='col-span-1 sm:col-span-2'>
              <ProductBannerCard id={"Beauty-banner"} sections={sections} isLoading={isLoading} />
            </GridItem>
          </GridLayout>

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

export default BeautyPage