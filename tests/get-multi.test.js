const removeDupes = require('../server/db').removeDuplication

test('remove dupes, removes duplication', () => {
  const expected = [1, 2, 3]
  const actual = removeDupes([1, 1, 2, 2, 2, 3])
  expect(expected).toEqual(actual)
})
