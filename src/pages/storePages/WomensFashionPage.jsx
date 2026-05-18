import React from 'react'
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container, ProductVerticalCard } from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';

function WomensFashionPage() {
    const { sections, products, isLoading, isError, error } = useCategorypageData("womens-fashion")
    return (
        <>
            <HeroSlider slides={heroSliderConfig.home} />
            <Container>
                <div className='flex flex-col gap-5' >
                    <GridLayout>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Women's Dresses"} isLoading={isLoading} id={"womens-dresses-grid"} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Trendy Tops"} isLoading={isLoading} id={"womens-tops-grid"} />
                        </GridItem>

                        <GridItem span='col-span-1 sm:col-span-2'>
                            <ProductBannerCard id={"bags-banner"} sections={sections} isLoading={isLoading} />
                        </GridItem>
                    </GridLayout>

                    <GridLayout>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Women's Watches"} isLoading={isLoading} id={"womens-watches-grid"} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Lavish Bags"} isLoading={isLoading} id={"womens-bags-grid"} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Women's Shoes"} isLoading={isLoading} id={"womens-shoes-grid"} />
                        </GridItem>
                        <GridItem>
                            <ProductGridCard sections={sections} title={"Elegant Jewellery"} isLoading={isLoading} id={"womens-jewellery-grid"} />
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

export default WomensFashionPage