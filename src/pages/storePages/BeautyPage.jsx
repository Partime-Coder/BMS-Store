import React from 'react'
import { ProductGridCard, ProductSliderCard, GridLayout, GridItem, ProductBannerCard, HeroSlider, Container} from '../../components';
import { useCategorypageData } from '../../hooks/productHooks/useCategorypageData';
import { heroSliderConfig } from '../../config/heroSlidersData';

function BeautyPage() {
  return (
     <>
         <HeroSlider slides={heroSliderConfig.home} />
         <Container>
         <div className='flex flex-col gap-5' >
           
         </div>
         </Container>
         </>
   )
}

export default BeautyPage