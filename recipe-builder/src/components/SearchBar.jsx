import React, { useState } from "react";

/**
 * Searchbar component for the application.
 * @param {string} type - The type of the input field (e.g., "text", "number").
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {boolean} required - Indicates whether the input is required.
 * @param {string} value - The current value of the input field.
 * @param {string} name - The name attribute for the input field.
 * @param {function} handleInputChange - The function to handle input changes.
 * @param {React.Element} rightIcon - The optional icon to be displayed on the right side of the input.
 */
const Searchbar = ({
  type,
  placeholder,
  required = false,
  value,
  name,
  handleInputChange,

  rightIcon,
}) => {
  return (
    <div>
      {/* Container for the input and optional right icon */}
      <div className='relative'>
        {/* Input field */}
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`bg-black border border-gray-800
         text-gray-300 text-md rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block
           w-full p-2.5 outline-none px-5 placeholder:text-sm shadow-xl`}
        />
        
        {/* Optional right icon */}
        {rightIcon && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer'>
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
