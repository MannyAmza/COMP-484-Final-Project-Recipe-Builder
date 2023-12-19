import React from 'react'
import { Link } from 'react-router-dom'

/**
 * RecipeCard component for displaying individual recipe details in a card format.
 * @param {Object} recipe - The recipe object containing details like image, label, cuisineType, etc.
 */
const RecipeCard = ({ recipe }) => {
    // Destructuring recipe object to get specific details
    const { image, label, cuisineType, dietLabel, mealType, uri } = recipe?.recipe

    // Extracting the ID from the recipe URI
    const id = uri?.split("#")[1]

    return (
        // Link to the individual recipe page
        <Link to={`/recipes/${id}`} className='w-full md:w-[220px]'>
            {/* Recipe Card Container */}
            <div className='bg-_gradient shadow w-full rounded-lg'>
                {/* Recipe Image */}
                <img src={image} alt={label} className='rounded-lg h-[200px] md:h-[150px] w-full' />

                {/* Recipe Details */}
                <div className='p-3'>
                    {/* Recipe Title */}
                    <p className='text-white font-semibold'>{label}</p>

                    {/* Additional Recipe Information */}
                    <div className='mt-2'>
                        {/* Cuisine Type Tag */}
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#453d0c43] shadow-xl 
                        rounded-full mr-3 text-orange-500'>
                            {cuisineType}
                        </span>
                        
                        {/* Meal Type Tag */}
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#453d0c43] shadow-xl 
                        rounded-full text-orange-500'>
                            {mealType}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard
