const plantsArray = []

//The below function is utilized in the plantSeeds function in tractor.js to push plants to the above empty plantsArray.
export const addPlant = (seedObj) => {
    plantsArray.push(seedObj)
}

//Returns the plantsArray for use in other functions throughout the modules.
export const usePlants = () => {
    return plantsArray
}