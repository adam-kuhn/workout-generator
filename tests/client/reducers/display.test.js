import display from '../../../client/reducers/display'
import {SET_TYPE, SET_TIME} from '../../../client/actions/selection'

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

test('on SET_TIME, showTime is set to false, and showGear to true when wodType is not "Running"', () => {
  const appState = {
    showTime: true,
    showGear: false,
    showWorkout: false
  }
  const action = {
    type: SET_TIME,
    wodType: 'strength'
  }
  const expected = {
    showTime: false,
    showGear: true,
    showWorkout: false
  }
  const actual = display(appState, action)

  expect(actual.showTime).toBe(expected.showTime)
  expect(actual.showGear).toBe(expected.showGear)
  expect(actual.showWorkout).toBe(expected.showWorkout)
})

test('on SET_TIME, showTime is set to false, and showWorkout to true when wodType is "Running"', () => {
  const appState = {
    showTime: true,
    showGear: false,
    showWorkout: false
  }
  const action = {
    type: SET_TIME,
    wodType: 'Running'
  }
  const expected = {
    showTime: false,
    showGear: false,
    showWorkout: true
  }
  const actual = display(appState, action)

  expect(actual.showTime).toBe(expected.showTime)
  expect(actual.showGear).toBe(expected.showGear)
  expect(actual.showWorkout).toBe(expected.showWorkout)
})
