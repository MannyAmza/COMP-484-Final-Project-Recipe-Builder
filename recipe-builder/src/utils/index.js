/**
 * Fetches a list of recipes from the Edamam API based on the specified filter.
 * @param {Object} filter - The filter object containing query and limit parameters.
 * @returns {Array} - An array of recipe hits.
 */
export async function fetchRecipes (filter){
    // Destructuring filter object to get query and limit
    const {query, limit} = filter;

    // Constructing the API URL for recipe search
    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`;


    // Fetching data from the API
    const response = await fetch(url)
    const data = await response.json();

    // Returning the hits array from the response data
    return data?.hits;
}

/**
 * Fetches a specific recipe from the Edamam API based on the specified ID.
 * @param {string} id - The ID of the recipe to be fetched.
 * @returns {Object} - The details of the specified recipe.
 */
export async function fetchRecipe(id){
    // Constructing the API URL for fetching a specific recipe by ID
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`
    
    // Fetching data from the API
    const response = await fetch(url)
    const data = await response.json();
    
    // Returning the details of the specified recipe
    return data[0];
}
