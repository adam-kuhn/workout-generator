// const knex = require('knex')('production') try with just not using this line
// // const knex = require('knex')
// const config = require('../knexfile').devlopment
// const devDb = knex(config)

// set up for deployment to heroku
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMultiGearWorkout,
  getOneGearWorkout,
  getRunningWorkout,
  getMulti
}

function getMulti (wodSelection, testDb) {
  console.log(wodSelection)
  const selectedType = wodSelection.type
  const selectedDuration = wodSelection.duration
  const selectedGear = wodSelection.gear
  const stringGear = selectedGear.join()
  console.log('selected', selectedGear)
  console.log(stringGear)
  const db = testDb || connection
  const gearAmount = selectedGear.length

  // return db('workouts')
    // .join('workout_gear', 'workout_gear.gear_id', 'workout.id')
    // .join('gear', 'workout_gear.gear_id', 'gear.id')
    // .where('workout.time', selectedDuration)
    // .andWhere('workout.type', selectedType)
    // .select('workout', 'type', 'time',
    //   db.raw('GROUP_CONCAT(gear.equipment AS equips)', ['workouts', 'gear', 'workout_gear']))
    //   .where(db.raw(1))
    // // .groupBy('gear.equipment as equips')
    // .groupBy('workouts.workout')
    // .havingIn('equips', selectedGear)
    // .then(result => {
    //   console.log(result)
    // })
  const selectedEquipmentIds = [2, 3] //kb/db and pull-up
  const nonMatchingEquipmentIds = db('gear')
    .whereNotIn('id', selectedEquipmentIds).select('id')

    return db('workouts')
      .join('workout_gear', 'workouts.id', 'workout_gear.workout_id')
      .join('gear', 'workout_gear.gear_id', 'gear.id')
      .whereNotIn('gear.id', nonMatchingEquipmentIds)
      .andWhere('workouts.type', selectedType)
      .andWhere('workouts.time', selectedDuration)
      .select('workouts.workout', 'gear.equipment', 'workouts.type', 'workouts.time')
      .then(workouts => {
        console.log(workouts)
      })
      .catch(err => {
        console.error(err)
      })
    // .join('workout_gear', 'workout_gear.gear_id', 'gear.id')
    // .join('gear', 'workout_gear.gear_id', 'gear.id')
    
    // .where('workouts.time', selectedDuration)
    // .andWhere('workouts.type', selectedType)
    // .groupBy('workouts.workout')
    // .havingIn('gear.equipment', ['pull-up', 'kb/db'])
    // .then(result => {
    //   console.log(result)
    // })
    // .catch(err => {
    //   console.error(err)
    // })
}

function getMultiGearWorkout (wodSelection, testDb) {
  console.log(wodSelection)
  const selectedType = wodSelection.type
  const selectedDuration = wodSelection.duration
  const selectedGear = wodSelection.gear
  console.log(selectedGear)
  const db = testDb || connection
  const gearAmount = selectedGear.length
  // const wodList = []

  return db('workouts')
    .where({
      type: selectedType,
      time: selectedDuration
    })
    .select('id')
    .then(wodIds => {
      console.log(wodIds)
      // turn above object to an array
      const wodId = []
      for (let id in wodIds) {
        wodId.push(wodIds[id].id)
      }
      console.log(wodId)
      return db('workouts')
        .join('workout_gear', 'workouts.id', 'workout_gear.workout_id')
        .join('gear', 'gear.id', 'workout_gear.gear_id')
        .whereIn('workouts.id', wodId)
        // .whereIn('gear.equipment', selectedGear)
        .select('workouts.id', 'workouts.workout', 'workout_gear.id as joinId', 'gear.equipment')
        .then(result => {
          console.log(result)
          console.log('selected gear', selectedGear)
          // make an array of id length for each workout that has one or more of the selected gear
          // if id length of the array === the length of the gear list, should have to the correct selection
          // except still need to filter out un need equipment
          const allIds = []
          for (let id in result) {
            allIds.push(result[id].id)
          }
          console.log(allIds)
          
          // const workoutGear = []
          // for (let gear in result) {
          // }
        })
    })
    .catch(err => {
      console.error(err)
    })
}

// get items out of wod selection, req.body

function getOneGearWorkout (wodSelection, testDb) {
  const db = testDb || connection
  const selectedType = wodSelection.type
  const selectedDuration = wodSelection.duration
  const selectedGear = wodSelection.gear
  // get workouts on Type and Time
  return db('workouts')
    .where({
      type: selectedType,
      time: selectedDuration
    })
    .select('id')
    .then(wodIds => {
      console.log(wodIds)
      // turn above object to an array
      // get id's of workouts
      const wodId = []
      for (let id in wodIds) {
        wodId.push(wodIds[id].id)
      }
      // join tables to see what gear the above workouts need
      return db('workout_gear')
        .join('gear', 'gear.id', 'workout_gear.gear_id')
        .whereIn('workout_gear.workout_id', wodId)
        .select('workout_gear.id', 'workout_gear.workout_id', 'workout_gear.gear_id', 'gear.equipment')
        .then(result => {
          console.log(result)
          const doesNotHaveEquipment = result.filter(workouts => {
            return workouts.equipment !== selectedGear[0]
            // return !selectedGear.includes(workouts.equipment)
          })
          console.log('does not equip', doesNotHaveEquipment)
          const unwantedIds = []
          for (let i = 0; i < doesNotHaveEquipment.length; i++) {
            unwantedIds.push(doesNotHaveEquipment[i].workout_id)
          }
          console.log('unwanted', unwantedIds)
          console.log('starting wod id', wodId)
          // console.log(new Set(unwantedIds))

          // filters the original wodId by returning what is NOT in unwantedIds
          const goodWod = wodId.filter(ids => {
            return !unwantedIds.includes(ids)
          })
          console.log('good wod', goodWod)
          return db('workouts')
            .whereIn('id', goodWod)
            .select('workout', 'description')
            .catch(err => {
              console.error(err)
            })
        })
    })
}

function getRunningWorkout (wodSelection, testDb) {
  const db = connection || testDb
  const selectedType = wodSelection.type
  const selectedDuration = wodSelection.duration
  console.log('running')
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
