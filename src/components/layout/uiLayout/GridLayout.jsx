import React from 'react'

function GridLayout({children , isProductGrid = false}) {
  return (
     <div className={isProductGrid ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-4" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"}>
      {children}
    </div>
  )
}

export default GridLayout