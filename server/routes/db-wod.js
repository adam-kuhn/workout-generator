const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
  if (req.body.wodType === 'Running') {
    db.getRunningWorkout(req.body)
      .then(result => {
        // const workouts = JSON.stringify(result)
        // const workouts = JSON.jsonify(result)

        res.status(200).send({result})
      })
  } else {
    db.getMulti(req.body)
      .then(result => {
        res.status(200).send({result})
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  }
})

module.exports = router
