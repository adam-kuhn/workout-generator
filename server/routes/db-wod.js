const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
  db.getWorkout(req.body)
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
})

module.exports = router
