var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

const workouts = require('./routes/db-wod')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/test', workouts)

module.exports = server
