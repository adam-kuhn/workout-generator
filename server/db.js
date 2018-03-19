// set up for deployment to heroku
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRunningWorkout,
  getMulti,
  removeDuplication,
  howMuchGear,
  getNames
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

function howMuchGear (allWorkouts, gearAmount) {
  const workoutsWithGear = getNames(allWorkouts)
  const amountOfGear = []
  for (let i = 0; i < workoutsWithGear.length; i++) {
    const numberOfItems = workoutsWithGear.filter(name => {
      return name === workoutsWithGear[i]
    })
    amountOfGear.push(numberOfItems)
  }
  const rightGearAmount = []
  for (let i = 0; i < amountOfGear.length; i++) {
    if (amountOfGear[i].length === gearAmount) {
      rightGearAmount.push(amountOfGear[i][0])
    }
    return rightGearAmount
  }
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
      const workoutNames = []
      console.log(workouts)
      for (let i = 0; i < workouts.length; i++) {
        workoutNames.push(workouts[i].workout)
      }
      const hasEquipmentAmount = []
      for (let i = 0; i < workoutNames.length; i++) {
        const workoutEquipmentAmount = workoutNames.filter(name => {
          return name === workoutNames[i]
        })
        // if workout instances don't match the amount of gear -> by comparing lengths
        // then it doesn't have all the needed items
        if (workoutEquipmentAmount.length === gearAmount) {
          hasEquipmentAmount.push(workoutEquipmentAmount)
        }
      }
      // get the names to run another query
      // it is possible for some of these workouts to have extra gear items
      const namesWithEquipment = []
      for (let i = 0; i < hasEquipmentAmount.length; i++) {
        namesWithEquipment.push(hasEquipmentAmount[i][0])
      }
      const namesForFinalQuery = removeDuplication(namesWithEquipment)
      // return will show all required gear
      // if number of iterations is again not = gearAmount -> length
      // then there is extra gear in the workout that was not selected
      return db('workouts')
        .join('workout_gear', 'workouts.id', 'workout_gear.workout_id')
        .join('gear', 'workout_gear.gear_id', 'gear.id')
        .whereIn('workouts.workout', namesForFinalQuery)
        .select('workouts.workout', 'gear.equipment')
        .then(result => {
          const names = result.map(workout => {
            return workout.workout
          })
          // referring to the length of the array that will be created inside the array
          const itemsForWorkout = []
          for (let i = 0; i < names.length; i++) {
            const numberOfItems = names.filter(name => {
              return name === names[i]
            })
            itemsForWorkout.push(numberOfItems)
          }
          const finalWorkoutNames = []
          for (let i = 0; i < itemsForWorkout.length; i++) {
            if (itemsForWorkout[i].length === gearAmount) {
              finalWorkoutNames.push(itemsForWorkout[i][0])
            }
          }
          const finalNames = removeDuplication(finalWorkoutNames)
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
