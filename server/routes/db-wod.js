const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.testJsonData()
    .then(result => {
      res.status(200).send({})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
