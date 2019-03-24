

const getRecipes = async (ingredient) => {

    const api_key = "811b2bb7b7de9cdfad7867f1ef207920";
    const app_id = "b572c556";
    const response = await fetch(`https://api.edamam.com/search?q=${ingredient}&app_id=${app_id}&app_key=${api_key}`)
    const nutrition = await response.json();
console.log(`https://api.edamam.com/search?q=${ingredient}&app_id=${app_id}&app_key=${api_key}`);
    return nutrition;

}

export default {
    getRecipes
}