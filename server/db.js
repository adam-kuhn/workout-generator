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
  // const db = testDb || devDb
  const db = testDb || connection
// get items out of wod selection, req.body
  return db('workouts')
    .join('workout_gear', )
}
