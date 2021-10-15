import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const cornArr = createCorn()

export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const plant of row) {
            if (plant === "Asparagus"){
                addPlant(createAsparagus())
            } else if (plant === "Corn"){
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
}