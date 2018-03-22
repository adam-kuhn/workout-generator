const request = require('supertest')
const server = require('../../server/server')
// const express = require('express')
// const router = express.Router()

test('/api/v1/workouts response with POST', () => {
  return request(server)
    .post('/api/v1/workouts')
    .expect('content-type', 'text/html; charset=utf-8')
})
