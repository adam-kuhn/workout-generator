const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
if (req.body.type === 'Running') {
    // refactor the .then(result) to be a function as all are the same
    db.getRunningWorkout(req.body)
      .then(result => {
        res.status(200).send({result})
      })
  }
  else {
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
