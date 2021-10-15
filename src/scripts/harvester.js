import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const cornArr = createCorn()

export const harvestPlants = (plantsArray) => {
    let newSeedArr = []
    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                newSeedArr.push(cornArr[0])
            }
        } else {
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


