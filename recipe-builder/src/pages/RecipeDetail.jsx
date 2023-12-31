import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipe, fetchRecipes } from '../utils'
import Loading from '../components/Loading'
import Header from '../components/Header'
import { AiFillPushpin } from "react-icons/ai"
import { BsPatchCheck } from "react-icons/bs"
import RecipeCard from '../components/RecipeCard'

/**
 * RecipeDetail page component for displaying detailed information about a specific recipe.
 */
const RecipeDetail = () => {
  // State to manage the current recipe, recommended recipes, and loading state
  const [recipe, setRecipe] = useState(null)
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)

  // Extracting the recipe ID from the route parameters
  const { id } = useParams()

  // Function to fetch the details of the specified recipe and recommended recipes
  const getRecipe = async (id) => {
    try {
      setLoading(true)

      // Fetching the details of the specified recipe by ID
      const data = await fetchRecipe(id)

      setRecipe(data)

      // Fetching recommended recipes based on the current recipe's label
      const recommend = await fetchRecipes({ query: recipe?.label, limit: 5 })

      setRecipes(recommend)

      setLoading(false)


    } catch (error) {
      console.log(error)

      setLoading(false)
    }
  }

  // Effect to fetch recipe details on component mount or when the ID changes
  useEffect(() => {
    getRecipe(id)
  }, [id])

  // Display loading spinner while recipe details are being fetched
  if (loading) {
    return (
      <div className='w-full h-[100vh] flex items-center justify-center'>
        <Loading />
      </div>
    );
  }
  return (
    <div className='w-full'>
      {/* Header Section */}
      <Header
        title={recipe?.label} image={recipe?.image}
      />

      {/* Recipe Details Section */}
      <div className='w-full px-4 lg:px-20 pt-5'>
        {/* Nutrition Information Section */}
        <div className='flex gap-10 items-center justify-center px-4'>
          {/* Nutrition Information Cards */}
          <div className='flex flex-col justify-between'>
            <span className='text-white text-center border border-orange-500 py-1.5 px-2 rounded-full mb-2'>
              {recipe?.calories.toFixed(2)} </span>

            <p className='text-neutral-100 text-[12px] md:text-md'>CALORIES</p>
          </div>

          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-orange-500 py-1.5 rounded-full mb-2'>
              {recipe?.totalTime}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>
              TOTAL TIME
            </p>
          </div>

          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-orange-500 py-1.5 rounded-full mb-2'>
              {recipe?.yield}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>SERVINGS</p>
          </div>


        </div>

        {/* Recipe Information Section */}
        <div className='w-full flex flex-col md:flex-row gap-8 py-20 pxx-4 md:px-10'>
          {/* LEFT SIDE - Ingredients and Health Labels */}
          <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
            {/* Ingredients Section */}
            <div className='flex flex-col gap-5'>
              <p className='text-orange-500 text-2xl underline'>Ingredients</p>
              {/* Mapping through ingredients and displaying each with a pin icon */}
              {
                recipe?.ingredientLines?.map((ingredient, index) => {
                  return (
                    <p key={index} className='text-neutral-100 flex gap-2'>
                      <AiFillPushpin className='text-orange-800 text-xl' /> {ingredient}
                    </p>
                  )
                })
              }
            </div>

            {/* Health Labels Section */}
            <div className='flex flex-col gap-3 mt-20'>
              <p className='text-orange-700 text-2xl underline'>Health Labels</p>

              {/* Mapping through health labels and displaying each with a check icon */}
              <div className='flex flex-wrap gap-4'>
                {
                  recipe?.healthLabels.map((item, index) => (
                    <p className='text-white flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full ' key={index}>
                      <BsPatchCheck color='orange' /> {item}
                    </p>
                  ))
                }

              </div>
            </div>
          </div>


          {/* RIGHT SIDE - Recommended Recipes */}
          <div className='w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0'>
            {/* Displaying recommended recipes if available */}
            {
              recipes?.length > 0 && (
                <>
                  <p className='text-white text-2xl'>Also Try This</p>
                  {/* Mapping through recommended recipes and displaying each in a card */}
                  <div className='flex flex-wrap gap-6 px-1 pt-3'>
                    {
                      recipes?.map((item, index) => (
                        <RecipeCard recipe={item} index={index} />
                      ))
                    }
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
