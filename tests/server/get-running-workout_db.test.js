const env = require('./test-environment')
const getRunningWorkout = require('../../server/db').getRunningWorkout

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getRunningWorkout returns correct WODS for: Running, >60 min', () => {
  const wodSelection = {
    type: 'Running',
    duration: '>60 min'
  }
  return getRunningWorkout(wodSelection, testDb)
    .then(result => {
      expect(result.length).toBe(2)
    })
})

test('getRunningWorkout returns correct WODS for: Running, >60 min', () => {
  const wodSelection = {
    type: 'Running',
    duration: '40-60 min'
  }
  return getRunningWorkout(wodSelection, testDb)
    .then(result => {
      expect(result.length).toBe(1)
    })
})
