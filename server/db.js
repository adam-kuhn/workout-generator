// const knex = require('knex')('production') try with just not using this line
// // const knex = require('knex')
// const config = require('../knexfile').devlopment
// const devDb = knex(config)

// set up for deployment to heroku
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWorkout
}

function getWorkout (wodSelection, testDb) {
  console.log(wodSelection)
  const selectedType = wodSelection.type
  const selectedDuration = wodSelection.duration
  const selectedGear = wodSelection.gear
  console.log(selectedGear)
  const db = testDb || connection
  const gearAmount = selectedGear.length
  if (gearAmount === 1) {
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
        return db('workout_gear')
          .join('gear', 'gear.id', 'workout_gear.gear_id')
          .whereIn('workout_gear.workout_id', wodId)
          .select('workout_gear.id', 'workout_gear.workout_id', 'workout_gear.gear_id', 'gear.equipment')
          .then(result => {
            console.log(result)
            const doesNotHaveEquipment = result.filter(workouts => {
              return workouts.equipment !== selectedGear[0]
            })
            console.log('does not equip', doesNotHaveEquipment)
            const unwantedIds = []
            for (let i = 0; i < doesNotHaveEquipment.length; i++) {
              unwantedIds.push(doesNotHaveEquipment[i].workout_id)
            }
            console.log('unwanted', unwantedIds)
            console.log('starting wod id', wodId)
            // console.log(new Set(unwantedIds))
            const goodWod = wodId.filter(ids => {
              return !unwantedIds.includes(ids)
            })
            console.log('good wod', goodWod)

            // for (let i = 0; i < unwantedIds.length; i++) {
            //   for (let j = 0; j < wodId.length; j++) {
            //     if (unwantedIds[i] !== wodId[j]) {
            //       goodWod.push(wodId[j])
            //     }
            //   }
            // }
            // console.log('good', goodWod)
            // for (let workouts in result) {
            //   for (let filtered in doesNotHaveEquipment) {
            //     if (workouts.workout_id === )
            //   }
            // }
          })
      })
  }
  // const wodList = []
  else {
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
}

function getOneGearWorkout (wodSelection, testDb) {
  const selectedType = wodSelection.type
  const selectedDuration = wodSelection.duration
  const selectedGear = wodSelection.gear[0]
  const db = testDb || connection
}
