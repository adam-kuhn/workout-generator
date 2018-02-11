// const knex = require('knex')('production')
// // const knex = require('knex')
// const config = require('../knexfile').devlopment
// const devDb = knex(config)

const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  testJsonData
}

function testJsonData (testDb) {
  // const db = testDb || devDb
  const db = testDb || connection
  return db('workouts')
}