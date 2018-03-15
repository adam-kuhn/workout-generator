
// set up for deployment to heroku
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRunningWorkout,
  getMulti
}

function getMulti (wodSelection, testDb) {
  const selectedType = wodSelection.type
  const selectedDuration = wodSelection.duration
  const selectedGear = wodSelection.gear
  const db = testDb || connection
  const gearAmount = selectedGear.length

  const nonMatchingEquipment = db('gear')
    .whereNotIn('equipment', selectedGear).select('equipment')

  return db('workouts')
    .join('workout_gear', 'workouts.id', 'workout_gear.workout_id')
    .join('gear', 'workout_gear.gear_id', 'gear.id')
    .whereNotIn('gear.equipment', nonMatchingEquipment)
    .andWhere('workouts.type', selectedType)
    .andWhere('workouts.time', selectedDuration)
    .select('workouts.workout', 'gear.equipment', 'workouts.type', 'workouts.time')
      .then(workouts => {
      const workoutNames = []
      for (let i = 0; i < workouts.length; i++) {
        workoutNames.push(workouts[i].workout)
      }
      const hasEquipmentAmount = []
      for (let i = 0; i < workoutNames.length; i++) {
        const workoutEquipmentAmount = workoutNames.filter(name => {
          return name === workoutNames[i]
        })
        // if the workout name doesn't appear the same amount of times as the gear selected, then you know it is doesn't fill the required selection
        // compare length of the filtered Name array, to the amount of gear selected
        if (workoutEquipmentAmount.length === gearAmount) {
          hasEquipmentAmount.push(workoutEquipmentAmount)
        }
      }
      // need to double check workouts now and make sure that gear that wasn't selected isn't passing through
      // get all gear items from the workouts provided
      // try running another query, to see how what other equipment is used in the workout - atm when str, 0-20, kb and pu, selected we get chipper, but chipper alos needs a box
      // can try to run another query to see all gear of the given workout, and test against what we already have
      // search for workouts that have additional items then the selected gear, and remove them from our first query
      // seems hacky but maybe hardcore some form of an array to test against? 
      // could have an array of all the equipment, then filter out the equipment that isn't selected to create a new array of all unselected gear, then quary all workouts that contain that gear, and remove from the result?...potentially just going round in circle ...
      // query on selecting all gear that is non matching equip, as in the sub query above: nonMatchingEquipment
      
      const namesWithEquipment = []
      for (i = 0; i < hasEquipmentAmount.length; i++) {
        namesWithEquipment.push(hasEquipmentAmount[i][0])
      }
    // remove dupes with a set
    const rmvDupe = new Set(namesWithEquipment)
    const reducedNames = [...rmvDupe]

      return db('workouts')
      .join('workout_gear', 'workouts.id', 'workout_gear.workout_id')
      .join('gear', 'workout_gear.gear_id', 'gear.id')
      .whereIn('workouts.workout', reducedNames)
      .select('workouts.workout', 'gear.equipment')
      .then(result => {
       const names = result.map(workout => {
         return workout.workout
       })
       // referring to the length of the array that will be created inside the array
       const itemsForWorkout = []
       for (let i = 0; i < names.length; i ++ ) {
         const numberOfItems = names.filter(name => {
           return name === names[i]
         })
         itemsForWorkout.push(numberOfItems)
       }
       const finalWorkoutNames = []
       for (let i = 0; i < itemsForWorkout.length; i ++) {
         if (itemsForWorkout[i].length === gearAmount) {
           finalWorkoutNames.push(itemsForWorkout[i][0])
         }
       }
       // rmv dupes, can break a lot of this code into other functions
       const finalRmvDupes = new Set(finalWorkoutNames)
       const finalNames = [...finalRmvDupes]
       return db('workouts')
       .whereIn('workouts.workout', finalNames)
       .select('workout', 'description')
      })
    })
  
    // if we do another queary on just the workout names, and see how many times they turn up now, then if it is greater then the gear list item then it will not fulfill the requirement
    // above we take the case where if we only have 1 item appearing (line 65), current code should never return workouts more than the amount of gear selected.
    // so if we run an original query to see all the gear for the already returned workouts, we will no be able to filter out any that are above the gear requirement and therefore all workouts that don't have the exact gear requirements will have been removed!!...i thinks

    .catch(err => {
      console.error(err)
    })
}

function getRunningWorkout (wodSelection, testDb) {
  const db = connection || testDb
  const selectedType = wodSelection.type
  const selectedDuration = wodSelection.duration
  return db('workouts')
    .where({
      type: selectedType,
      time: selectedDuration
    })
    .select('workout', 'description')
    .catch(err => {
      console.error(err)
    })
}
