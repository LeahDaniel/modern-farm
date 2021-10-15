import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js";


const plan = createPlan()
const plantsArr = usePlants()

// Uses the randomly generated plan as input to output a "plot" of seeds. Turns an array of strings into an array of objects. 
// The plantSeeds function utilizes the addPlant function to push to an array, which can then be returned by the usePlants function (plantsArr).
plantSeeds(plan)

// Uses the generated array of objects from the previous step as input (the returned value from the usePlants function).
// Outputs an array of objects that represents a harvest of plants. Uses the plant's output property to produce multiple copies of each plant.
harvestPlants(plantsArr)


