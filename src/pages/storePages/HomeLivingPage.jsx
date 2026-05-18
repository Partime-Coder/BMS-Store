import React from 'react'
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container, ProductVerticalCard } from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';

function HomeLivingPage() {
    const { sections, products, isLoading, isError, error } = useCategorypageData("home-living")
    return (
        <>
            <HeroSlider slides={heroSliderConfig.home} />
            <Container>
                <div className='flex flex-col gap-5' >
                    <GridLayout>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Comfort Meets Style"} isLoading={isLoading} id={"furniture-grid"} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Style Your Space"} isLoading={isLoading} id={"home-decoration-grid"} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Kitchen Essentials"} isLoading={isLoading} id={"kitchen-1-grid"} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Modern Kitchen Picks"} isLoading={isLoading} id={"kitchen-2-grid"} />
                        </GridItem>
                    </GridLayout>

                    <ProductSliderCard sections={sections} id={"kitchen-accessories-slider"} title={"Cooking Made Easy"} isLoading={isLoading} />

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

export default HomeLivingPage