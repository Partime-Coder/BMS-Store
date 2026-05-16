import React from 'react'
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container } from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';

function VehiclesPage() {
    const { sections, products, isLoading, isError, error } = useCategorypageData("vehicles")
    return (
        <>
            <HeroSlider slides={heroSliderConfig.home} />
            <Container>
                <div className='flex flex-col gap-5' >
                    <GridLayout>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Latest Bikes"} isLoading={isLoading} id={"bike-grid"} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Latest Cars"} isLoading={isLoading} id={"car-grid"} />
                        </GridItem>
                        <GridItem span='col-span-1 sm:col-span-2'>
                            <ProductBannerCard id={"hero-banner"} sections={sections} isLoading={isLoading} />
                        </GridItem>
                    </GridLayout>
                </div>
            </Container>
        </>
    )
}

export default VehiclesPage