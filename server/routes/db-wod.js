const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
  if (req.body.gear.length === 1) {
    db.getOneGearWorkout(req.body)
      .then(result => {
        console.log(result)
        res.status(200).send({result})
      })
  } 
  else if (req.body.type === 'Running') {
    // refactor the .then(result) to be a function as all are the same
    db.getRunningWorkout(req.body)
      .then(result => {
        res.status(200).send({result})
      })
  }
  else {
    db.getMultiGearWorkout(req.body)
      .then(result => {
      // console.log('returned', result)
      // need to randomize result
      // const randoWorkout =randomizeFunction(result)
      // send randoWorkout
        res.status(200).send({result})
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  }
})

module.exports = router
