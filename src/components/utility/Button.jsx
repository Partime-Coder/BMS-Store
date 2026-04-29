import React from 'react'

function Button({
  children,
  type = "button",
  rounded = "rounded-lg",
  textColor = "text-white",
  bgColor = "",
  hoverBgColor = "",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        ${bgColor}
        ${textColor}
        ${rounded}
        ${hoverBgColor}
        hover:cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button