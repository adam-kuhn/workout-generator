const removeDupes = require('../server/db').removeDuplication
const howMuchGear = require('../server/db').howMuchGear
const getNames = require('../server/db').getNames
const neededGear = require('../server/db').neededGear
const getRightGearAmount = require('../server/db').getRightGearAmount
const allWorkouts = [
  {
    workout: 'x',
    gear: 'a'
  },
  {
    workout: 'x',
    gear: 'b'
  },
  {
    workout: 'x',
    gear: 'c'
  },
  {
    workout: 'y',
    gear: 'b'},
  {
    workout: 'z',
    gear: 'a'},
  {
    workout: 'z',
    gear: 'b'
  },
  {workout: 'AA',
    gear: 'a'
  },
  {workout: 'AA',
    gear: 'b'
  }]

test('remove dupes, removes duplication', () => {
  const expected = [1, 2, 3]
  const actual = removeDupes([1, 1, 2, 2, 2, 3])
  expect(expected).toEqual(actual)
})

test('getNames, returns a list of all iterations of the workout names', () => {
  const expected = ['x', 'x', 'x', 'y', 'z', 'z', 'AA', 'AA']
  const actual = getNames(allWorkouts)
  expect(actual).toEqual(expected)
})

test('neededGear returns an of arrays, with like names grouped together', () => {
  const workoutNames = ['x', 'x', 'x', 'y', 'z', 'z', 'AA', 'AA']
  const expected = [
    ['x', 'x', 'x'],
    ['x', 'x', 'x'],
    ['x', 'x', 'x'],
    ['y'],
    ['z', 'z'],
    ['z', 'z'],
    ['AA', 'AA'],
    ['AA', 'AA']
  ]
  const actual = neededGear(workoutNames)
  expect(actual).toEqual(expected)
})

test('rightGearAmount returns an array of workouts that have the correct amount of gear', () => {
  const gearAmount = 2
  const amountOfEquipment = [
    ['x', 'x', 'x'],
    ['x', 'x', 'x'],
    ['x', 'x', 'x'],
    ['y'],
    ['z', 'z'],
    ['z', 'z'],
    ['AA', 'AA'],
    ['AA', 'AA']
  ]
  const expected = ['z', 'z', 'AA', 'AA']
  const actual = getRightGearAmount(amountOfEquipment, gearAmount)
  expect(actual).toEqual(expected)
})

test('howMuchGear, returns an array of items with only the specific gear amount', () => {
  const gearAmount = 2
  const expected = ['z', 'z', 'AA', 'AA']
  const actual = howMuchGear(allWorkouts, gearAmount)
  expect(actual).toEqual(expected)
  expect(actual.length).toBe(expected.length)
  expect(actual[0]).toBe(expected[0])
  expect(actual[1]).toBe(expected[1])
})
