const plantsArray = []

export const addPlant = (seedObj) => {
    plantsArray.push(seedObj)
}

export const usePlants = () => {
    return plantsArray
}