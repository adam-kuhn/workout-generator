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
  // const db = testDb || devDb
  const db = testDb || connection
  // get items out of wod selection, req.body
  return db('workouts')
    .join('workout_gear', 'workouts.id', 'workout_gear.workout_id')
    .join('gear', 'gear.id', 'workout_gear.gear_id')
    // .select('workouts.id', 'workouts.workout', 'workouts.description')
    // .where({      })
    .then(result => {
      console.log(result)
    })
    // .where({
    //   type: selectedType,
    //   time: selectedDuration
    // })
    // .select('id')
    // .then(wodIds => {

    // }
    //   return db('workouts_gear')
    //     .where()
    //   console.log(selectedGear)
    //   console.log(wodIds)
    // })
    .catch(err => {
      console.error(err)
    })
}
