import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

//Sets the corn array to a variable in order to return only one of the objects in the harvestPlants function. This prevents the full array being added for every output.
const cornArr = createCorn()

export const harvestPlants = (plantsArray) => {
    let newSeedArr = []
    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            //Output divided by 2 for corn in order to add only 6 corn for every 2 corn in the array, as opposed to 12. This represents the other 6 being used elsewhere.
            for (let i = 0; i < plant.output / 2; i++) {
                //Adds only one corn object for each of the 6 outputs, instead of the full array of 2 objects.
                newSeedArr.push(cornArr[0])
            }
        } else {
            //Repeats the push process for as much output as each plant object has.
            for (let i = 0; i < plant.output; i++) {
                if (plant.type === "Asparagus") {
                    newSeedArr.push(createAsparagus())
                } else if (plant.type === "Potato") {
                    newSeedArr.push(createPotato())
                } else if (plant.type === "Soybean") {
                    newSeedArr.push(createSoybean())
                } else if (plant.type === "Sunflower") {
                    newSeedArr.push(createSunflower())
                } else if (plant.type === "Wheat") {
                    newSeedArr.push(createWheat())
                }
            }
        }
    }
    return newSeedArr
}


