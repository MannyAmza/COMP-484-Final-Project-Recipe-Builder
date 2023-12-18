import React from 'react'

/**
 * Button component to be used throughout the application.
 * @param {boolean} isDisabled - Indicates if the button should be disabled.
 * @param {string} btnType - Specifies the type of the button (e.g., "button", "submit").
 * @param {string} containerStyle - Additional CSS classes for the button container.
 * @param {string} textStyle - Additional CSS classes for the button text.
 * @param {string} title - The text content of the button.
 * @param {React.Element} rightIcon - The optional icon to be displayed on the right side of the button.
 * @param {function} handleClick - The function to be executed when the button is clicked.
 */

const Button = ({
    isDisabled,
    btnType, containerStyle, textStyle, title, rightIcon, handleClick
}) => {
    return (
        <button disabled={isDisabled ?? false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}
        >
            <span className='flex-1'>{title}</span>
            {rightIcon && <div className='relative w-6 h-6'>
                {rightIcon}
            </div>}
        </button>
    )
}

export default Button
