import React from 'react'
import { Loader } from '../index.js'

function ProductBannerCard({ id, sections, isLoading }) {

  const section = sections.find(s => s.id === id)
  const banner = section?.data || {}
  console.log(banner)
console.log(banner?.titleColor)

  return (
    <div
      className="w-full h-full overflow-hidden p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6"
      style={{
        backgroundColor: banner.bgColor
      }}
    >

      {isLoading ? (

        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>

      ) : (

        <>

          <div className="w-full sm:w-3/5">

            <h2
              className="text-3xl sm:text-5xl font-bold mb-3 leading-tight"
              style={{
                color: banner?.titleColor
              }}
            >
              {banner?.title}
            </h2>

            <p
              className="text-sm sm:text-lg mb-5"
              style={{
                color: banner?.subtitleColor
              }}
            >
              {banner?.subtitle}
            </p>

            <a
              href={banner?.ctaLink}
              className="font-semibold hover:underline"
              style={{
                color: banner?.titleColor
              }}
            >
              {banner?.ctaText} →
            </a>

          </div>


          <div className="w-full sm:w-2/5 flex justify-center">

            <img
              src={banner.image}
              alt={banner?.title}
              className="w-full max-h-72 object-contain"
            />

          </div>
        </>

      )}

    </div>
  )
}

export default ProductBannerCard