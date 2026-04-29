import React, { useId, forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    label,
    type = "text",
    placeholder = "write something...",
    rounded = "rounded-lg",
    className = "",
    id: customId,
    disabled = false,
    ...props
  },
  ref
) {
  const generatedId = useId();
  const id = customId || generatedId;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1 pl-1 text-sm text-text-secondary"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full
          bg-White
          px-4 py-2
          text-text-primary
          placeholder:text-gray-400
          focus:outline-none
          transition duration-200 ease-in-out
          disabled:bg-gray-100
          disabled:cursor-not-allowed
          ${className}
          ${rounded}
        `}
        {...props}
      />
    </div>
  );
});

export default Input;


      
