// set up for deployment to heroku
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRunningWorkout,
  getMulti,
  removeDuplication,
  howMuchGear,
  getNames,
  neededGear,
  getRightGearAmount
}

function removeDuplication (workoutNames) {
  const setNames = new Set(workoutNames)
  return [...setNames]
}

function getNames (allWorkouts) {
  const workoutsWithGear = allWorkouts.map(workout => {
    return workout.workout
  })
  return workoutsWithGear
}

function neededGear (workoutNames) {
  const amountOfGear = []
  for (let i = 0; i < workoutNames.length; i++) {
    const numberOfItems = workoutNames.filter(name => {
      return name === workoutNames[i]
    })
    amountOfGear.push(numberOfItems)
  }
  return amountOfGear
}

function getRightGearAmount (amountOfEquipment, gearAmount) {
  const rightGearAmount = []
  for (let i = 0; i < amountOfEquipment.length; i++) {
    if (amountOfEquipment[i].length === gearAmount) {
      rightGearAmount.push(amountOfEquipment[i][0])
    }
  }
  return rightGearAmount
}

function howMuchGear (allWorkouts, gearAmount) {
  const workoutsWithGear = getNames(allWorkouts)
  const amountOfEquipment = neededGear(workoutsWithGear)
  const filteredWorkouts = getRightGearAmount(amountOfEquipment, gearAmount)
  return filteredWorkouts
}

function getMulti (wodSelection, testDb) {
  const selectedType = wodSelection.type
  const selectedDuration = wodSelection.duration
  const selectedGear = wodSelection.gear
  const db = testDb || connection
  const gearAmount = selectedGear.length
  const nonMatchingEquipment = db('gear')
    .whereNotIn('equipment', selectedGear).select('equipment')
  // returns instances that have one of the selected items
  return db('workouts')
    .join('workout_gear', 'workouts.id', 'workout_gear.workout_id')
    .join('gear', 'workout_gear.gear_id', 'gear.id')
    .whereNotIn('gear.equipment', nonMatchingEquipment)
    .andWhere('workouts.type', selectedType)
    .andWhere('workouts.time', selectedDuration)
    .select('workouts.workout', 'gear.equipment', 'workouts.type', 'workouts.time')
    .then(workouts => {
      const workoutsWithEquipment = howMuchGear(workouts, gearAmount)
      const namesForFinalQuery = removeDuplication(workoutsWithEquipment)
      return db('workouts')
        .join('workout_gear', 'workouts.id', 'workout_gear.workout_id')
        .join('gear', 'workout_gear.gear_id', 'gear.id')
        .whereIn('workouts.workout', namesForFinalQuery)
        .select('workouts.workout', 'gear.equipment')
        .then(finalWorkouts => {
          const hasSpecificGear = howMuchGear(finalWorkouts, gearAmount)
          const finalNames = removeDuplication(hasSpecificGear)
          return db('workouts')
            .whereIn('workouts.workout', finalNames)
            .select('workout', 'description')
        })
    })
    .catch(err => {
      console.error(err)
    })
}

function getRunningWorkout (wodSelection, testDb) {
  const db = testDb || connection
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
