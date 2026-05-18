import React from "react"
import { Link } from "react-router"

function HeroSlide({ slide }) {
  return (
    <div
      className="min-h-[75vh] w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-10 gap-10"
      style={{
        backgroundColor: slide.bgColor,
      }}
    >

      {/* Left Content */}
      <div className="w-full lg:w-3/5">

        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-5"
          style={{
            color: slide.titleColor,
          }}
        >
          {slide.title}
        </h1>

        <p
          className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl"
          style={{
            color: slide.subtitleColor,
          }}
        >
          {slide.subtitle}
        </p>

        <Link
          to={slide.ctaLink}
          style={{
            color: slide.titleColor,
            textDecoration: "underline",
          }}
        >
          {slide.ctaText}
        </Link>

      </div>

      {/* Right Image */}
      <div className="w-full lg:w-2/5 flex justify-center items-center">

        <img
          src={slide.image}
          alt={slide.title}
          loading="lazy"
          className="w-full max-w-md lg:max-w-xl h-87.5 sm:h-112.5 object-contain"
        />

      </div>

    </div>
  )
}

export default HeroSlide