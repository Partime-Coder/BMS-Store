import React from 'react'
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container, ProductVerticalCard } from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';

function MensFashionPage() {
    const { sections, products, isLoading, isError, error } = useCategorypageData("mens-fashion")
    return (
        <>
            <HeroSlider slides={heroSliderConfig.home} />
            <Container>
                <div className='flex flex-col gap-5' >
                    <GridLayout>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Men's Watches"} isLoading={isLoading} id={"mens-shirts-grid"} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Men's Shoes"} isLoading={isLoading} id={"mens-shoes-grid"} />
                        </GridItem>
                        <GridItem span='col-span-1 sm:col-span-2'>
                            <ProductBannerCard id={"shoes-banner"} sections={sections} isLoading={isLoading} />
                        </GridItem>
                    </GridLayout>

                    <GridLayout>
                        <GridItem span='col-span-1 sm:col-span-2'>
                            <ProductBannerCard id={"watches-banner"} sections={sections} isLoading={isLoading} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Men's Watches"} isLoading={isLoading} id={"mens-watches-grid"} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Men's Watches"} isLoading={isLoading} id={"sunglasses-grid"} />
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

export default MensFashionPage