const env = require('./test-environment')
const getMulti = require('../../server/db').getMulti

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getMulti returns correct WODS for: OCR, 40-60 min, no gear', () => {
  const wodSelection = {
    wodType: 'OCR',
    duration: '40-60 min',
    gear: ['none']
  }
  return getMulti(wodSelection, testDb)
    .then(result => {
      expect(result.length).toBe(2)
    })
})

test('getMulti returns correct WODS for: OCR, 20-40 min, sandbag', () => {
  const wodSelection = {
    wodType: 'OCR',
    duration: '20-40 min',
    gear: ['sandbag']
  }
  return getMulti(wodSelection, testDb)
    .then(result => {
      expect(result.length).toBe(3)
    })
})

test('getMulti returns correct WODS for: OCR, 20-40 min, pull-up', () => {
  const wodSelection = {
    wodType: 'OCR',
    duration: '20-40 min',
    gear: ['pull-up']
  }
  return getMulti(wodSelection, testDb)
    .then(result => {
      expect(result.length).toBe(1)
    })
})

test('getMulti returns correct WODS for: Strength, >60 min, kb, box, pull-up', () => {
  const wodSelection = {
    wodType: 'Strength',
    duration: '>60 min',
    gear: ['kb/db', 'pull-up', 'box']
  }
  return getMulti(wodSelection, testDb)
    .then(result => {
      expect(result.length).toBe(2)
    })
})

test('getMulti returns correct WODS for: Strength, >60 min, kb, box, barbell', () => {
  const wodSelection = {
    wodType: 'Strength',
    duration: '>60 min',
    gear: ['kb/db', 'barbell', 'box']
  }
  return getMulti(wodSelection, testDb)
    .then(result => {
      expect(result.length).toBe(1)
    })
})
