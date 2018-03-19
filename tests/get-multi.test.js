const removeDupes = require('../server/db').removeDuplication
const howMuchGear = require('../server/db').howMuchGear
const getNames = require('../server/db').getNames

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

// test('howMuchGear, returns an array of items with only the specific gear amount', () => {
//   const gearAmount = 2
//   const allWorkouts = [
//     {
//       workout: 'x',
//       gear: 'a'
//     },
//     {
//       workout: 'x',
//       gear: 'b'
//     },
//     {
//       workout: 'x',
//       gear: 'c'
//     },
//     {
//       workout: 'y',
//       gear: 'b'},
//     {
//       workout: 'z',
//       gear: 'a'},
//     {
//       workout: 'z',
//       gear: 'b'
//     },
//     {workout: 'AA',
//       gear: 'a'
//     },
//     {workout: 'AA',
//       gear: 'b'
//     }]
//   const expected = ['z', 'AA']
//   const actual = howMuchGear(allWorkouts, gearAmount)
//   expect(actual).toEqual(expected)
// })

test('getNames, returns a list of all iterations of the workout names', () => {
  const expected = ['x', 'x', 'x', 'y', 'z', 'z', 'AA', 'AA']
  const actual = getNames(allWorkouts)
  expect(actual).toEqual(expected)
})
