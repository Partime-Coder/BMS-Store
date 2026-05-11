import React from 'react'

function GridItem({ children, span = "col-span-1" }) {
  return (
    <div className={`${span} h-full`}>
      {children}
    </div>
  )
}
export default GridItem