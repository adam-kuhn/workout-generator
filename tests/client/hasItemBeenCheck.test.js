import {hasItemBeenChecked} from '../../client/components/Gear'

test('hasItemBeenChecked, returns 0 if current item has not been selected', () => {
  const currentSelection = {
    kb: '',
    pullup: 'pullup',
    sandbag: 'sandbag',
    barbell: '',
    box: ''
  }
  const actual = hasItemBeenChecked('kb', currentSelection)
  expect(actual).toBe(0)
})

test('hasItemBeenChecked, returns 1 if current has been selected', () => {
  const currentSelection = {
    kb: 'kb',
    pullup: '',
    sandbag: '',
    barbell: '',
    box: ''
  }
  const actual = hasItemBeenChecked('kb', currentSelection)
  expect(actual).toBe(1)
})
