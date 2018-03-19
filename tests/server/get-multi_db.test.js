const env = require('./test-environment')
const getMulti = require('../../server/db').getMulti

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getMulti returns correct WODS: OCR, 40-60 min, no gear', () => {
  const wodSelection = {
    type: 'OCR',
    duration: '40-60 min',
    gear: ['none']
  }
  return getMulti(wodSelection, testDb)
    .then(result => {
      expect(result.length).toBe(2)
    })
})
