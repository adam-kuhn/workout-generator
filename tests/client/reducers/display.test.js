import display from '../../../client/reducers/display'
import {SET_TYPE} from '../../../client/actions/selection'

const initialState = {
  showHeader: false,
  showHome: true,
  showTime: false,
  showGear: false,
  showWaiting: true,
  showWorkout: false
}

test('on SET_TYPE showHeader and showTime are true, showHome is false', () => {
  const action = {
    type: SET_TYPE,
    wodType: 'running'
  }
  const expected = {
    showHeader: true,
    showHome: false,
    showTime: true
  }
  const actual = display(initialState, action)
  expect(actual.showHeader).toBe(expected.showHeader)
  expect(actual.showHome).toBe(expected.showHome)
  expect(actual.showTime).toBe(expected.showTime)
})
