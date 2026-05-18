import React from 'react'
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container, ProductVerticalCard } from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';

function SportsPage() {
  const { sections, products, isLoading, isError, error } = useCategorypageData("sports")
  return (
    <>
      <HeroSlider slides={heroSliderConfig.home} />
      <Container>
        <div className='flex flex-col gap-5' >
          <GridLayout>
            <GridItem>
              <ProductGridCard sections={sections} title={"Don't Stop Playing"} isLoading={isLoading} id={"sports-grid"} />
            </GridItem>
            <GridItem>
              <ProductGridCard sections={sections} title={"For your Cricket journey"} isLoading={isLoading} id={"cricket-grid"} />
            </GridItem>
            <GridItem>
              <ProductGridCard sections={sections} title={"60% off"} isLoading={isLoading} id={"sports2-grid"} />
            </GridItem>
            <GridItem>
              <ProductGridCard sections={sections} title={"20% off"} isLoading={isLoading} id={"sports3-grid"} />
            </GridItem>
          </GridLayout>

          <ProductSliderCard sections={sections} id={"sports-slider"} title={"More Sports "} isLoading={isLoading} />

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

export default SportsPage