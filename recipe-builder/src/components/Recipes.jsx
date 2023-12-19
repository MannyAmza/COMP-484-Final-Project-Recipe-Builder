import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Loading from './Loading'
import Searchbar from './SearchBar'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../utils'
import Button from './Button'

/**
 * Recipes component for displaying and searching recipes.
 */
const Recipes = () => {
    // State to manage the recipes list, search query, limit, and loading state
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('Vegan')
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState(false)

    // Function to handle input change in the search bar
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    // Function to fetch recipes based on the current query and limit
    const fetchRecipe = async () => {
        try {
            const data = await fetchRecipes({ query, limit })

            setRecipes(data)

            setLoading(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    // Function to handle the search button click
    const handleSearchedRecipe = async (e) => {
        e.preventDefault()
        fetchRecipe()
    }

    // Function to load more recipes
    const showMore = () => {
        setLimit(prev => prev + 10)
        fetchRecipe()
    }

    // Effect to fetch recipes on component mount
    useEffect(() => {
        setLoading(true)

        fetchRecipe()

    }, [])

    // Display loading spinner while recipes are being fetched
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div className='w-full'>
            {/* Search Bar Section */}
            <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
                <form className='w-full lg:w-2/4' onSubmit={handleSearchedRecipe}>
                    {/* Search Bar Component */}
                    <Searchbar placeholder="eg. Cake, Vegan, Chicken"
                        handleInputChange={handleChange}
                        rightIcon={
                            <BiSearchAlt2 className='text-gray-600' onClick={handleSearchedRecipe} />
                        }
                    />
                </form>

            </div>

            {/* Recipe Display Section */}
            {
                recipes?.length > 0 ? (
                    <>
                        {/* Recipe Cards */}
                        <div className='w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                            {
                                recipes?.map((item, index) => (
                                    <RecipeCard recipe={item} key={index} />))
                            }
                        </div>

                        {/* "Show More" Button */}
                        <div className='flex w-full items-center justify-center py-10'>

                            <Button
                                title="Show More"
                                containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
                                handleClick={showMore}
                            />
                        </div>
                    </>
                ) : // Displayed when no recipes are found
                <div className='text-orange-500 w-full items-center justify-center py-10'>
                    <p className='text-center'>No Recipe Found</p>
                </div>
            }
        </div>
    )
}

export default Recipes
