import React from 'react'
import { NavLink } from "react-router-dom"

function SecondaryNav() {

  const categories = [
    {
      label: "Home",
      link: "/",
    },

    {
      label: "Beauty",
      link: "/category/beauty",
    },

    {
      label: "Electronics",
      link: "/category/electronics",
    },

    {
      label: "Men's Fashion",
      link: "/category/mens-fashion",
    },

    {
      label: "Women's Fashion",
      link: "/category/womens-fashion",
    },

    {
      label: "Groceries",
      link: "/category/groceries",
    },

    {
      label: "Home & Living",
      link: "/category/home-living",
    },

    {
      label: "Vehicles",
      link: "/category/vehicles",
    },

    {
      label: "Sports",
      link: "/category/sports",
    },
  ]
     return (
    <div className="w-full bg-PrussainBlue text-White text-sm border-t border-white/10">

      <div
        className="
          w-full
          mx-auto
          flex
          items-center
          justify-start
          md:justify-center
          gap-6
          px-4
          sm:px-6
          lg:px-10
          h-10
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
        "
      >

        {categories.map((category) => (

          <NavLink
            key={category.label}
            to={category.link}
            className={({ isActive }) =>
              `
                shrink-0
                transition
                hover:text-amber-400
                hover:underline

                ${isActive
                  ? "text-amber-400 font-semibold"
                  : "text-white"
                }
              `
            }
          >
            {category.label}
          </NavLink>

        ))}

      </div>

    </div>
  )
}

export default SecondaryNav