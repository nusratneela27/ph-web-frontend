// Add a recipe
export const addRecipes = async recipeData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/add-recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(recipeData),
    })

    const data = await response.json()
    return data
}