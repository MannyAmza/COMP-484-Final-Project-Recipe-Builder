import React from 'react'
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../images";

// Array of banner images
const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

/**
 * Header component for the application.
 * @param {string} title - The title to be displayed in the header.
 * @param {string} image - The image source URL for the header background.
 * @param {string} type - The type of header (optional, used for additional content).
 */
const Header = ({ title, image, type }) => {
  return (
    <div className='w-full h-[100vh]'>
      {/* Header Background Image */}
      <div className='relative w-full h-full'>
        <img src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt='Hero Image' className='w-full h-full object-cover'
        />
      </div>
      
      {/* Header Overlay Content */}
      <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
        {/* Header Title */}
        <h1 className='text-white text-5xl md:text-6xl font-bold text-center'>{title}</h1>
          {/* Additional Content (if type is provided) */}
          {type && (
            <p className='text-l mt-4 text-center text-orange-500 bg-[#00000090] px-6 py-4
                  rounded-full'>Welcome to CookTherapy, your therapeutic site for your cravings!
              <br className='hidden md:block'/>
                    Discover a collection of mouthwatering recipes from around the world.
                  </p>
          )
        }
      </div>
    </div>
  )
}

export default Header
