import React from 'react'

function Container({children, className = ""}) {
  return (
    <div className={`w-full h-full py-2.5 px-0 sm:px-2.5 ${className}`}>
      {children}
    </div>
  )
}

export default Container