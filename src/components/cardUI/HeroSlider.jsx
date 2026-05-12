import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import {
    Pagination,
    Autoplay,
    Navigation,
} from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { HeroSlide } from "../index.js"

function HeroSlider({ slides = [] }) {
    return (
        <Swiper
            modules={[
                Pagination,
                Autoplay,
                Navigation,
            ]}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop={true}
            className="
    overflow-hidden

    [&_.swiper-pagination-bullet]:bg-gray-400
    [&_.swiper-pagination-bullet]:opacity-100

    [&_.swiper-pagination-bullet-active]:bg-amber-500!

    [&_.swiper-button-next]:text-amber-500!
  [&_.swiper-button-prev]:text-amber-500!

  [&_.swiper-button-next::after]:text-amber-500
  [&_.swiper-button-prev::after]:text-amber-500
  "
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <HeroSlide slide={slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HeroSlider