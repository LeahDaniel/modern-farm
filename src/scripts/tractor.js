import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

//Sets the corn array to a variable in order to return each object individually in the plantSeeds function.
const cornArr = createCorn()

//Iterates through each row of the plan, then each plant in each row, in order to add each plant to the plantsArray in field.js
export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const plant of row) {
            if (plant === "Asparagus"){
                addPlant(createAsparagus())
            } else if (plant === "Corn"){
                // Add each corn object individually using their indexes so that there is not a nested array.
                addPlant(cornArr[0])
                addPlant(cornArr[1])
            } else if (plant === "Potato"){
                addPlant(createPotato())
            } else if (plant === "Soybean"){
                addPlant(createSoybean())
            } else if (plant === "Sunflower"){
                addPlant(createSunflower())
            } else if (plant === "Wheat"){
                addPlant(createWheat())
            }   
        }
    }
    //Does not return due to the usePlants function being used for returning the array.
}