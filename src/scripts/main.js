import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js";


const plan = createPlan()
const plantsArr = usePlants()


plantSeeds(plan)

harvestPlants(plantsArr)


