import toggleComponentViews from '../../../client/reducers/toggleComponentViews'
import {SAVE_WORKOUT_TYPE_SHOW_TIME, SAVE_DURATION_SHOW_GEAR, SAVE_DURATION_RUNNING_WORKOUT, SET_GEAR} from '../../../client/actions/selection'
import {BACK_HOME, BACK_FROM_WOD} from '../../../client/actions/back'
import {SHOW_WOD} from '../../../client/actions/workout'

const initialState = {
  showHeaderComponent: false,
  showHomeComponent: true,
  showTimeComponent: false,
  showGearComponent: false,
  showWaitingComponent: true,
  showWorkoutComponent: false
}

test('on SAVE_WORKOUT_TYPE_SHOW_TIME showHeader and showTimeComponent are true, showHomeComponent is false', () => {
  const action = {
    type: SAVE_WORKOUT_TYPE_SHOW_TIME
  }
  const expected = {
    showHeaderComponent: true,
    showHomeComponent: false,
    showTimeComponent: true
  }
  const actual = toggleComponentViews(initialState, action)

  expect(actual.showHeaderComponent).toBe(expected.showHeaderComponent)
  expect(actual.showHomeComponent).toBe(expected.showHomeComponent)
  expect(actual.showTimeComponent).toBe(expected.showTimeComponent)
})

test('on SAVE_DURATION_SHOW_GEAR, showTimeComponent is set to false, and showGearComponent to true', () => {
  const appState = {
    showTimeComponent: true,
    showGearComponent: false,
    showWorkoutComponent: false
  }
  const action = {
    type: SAVE_DURATION_SHOW_GEAR
  }
  const expected = {
    showTimeComponent: false,
    showGearComponent: true,
    showWorkoutComponent: false
  }
  const actual = toggleComponentViews(appState, action)

  expect(actual.showTimeComponent).toBe(expected.showTimeComponent)
  expect(actual.showGearComponent).toBe(expected.showGearComponent)
  expect(actual.showWorkoutComponent).toBe(expected.showWorkoutComponent)
})

test('on SAVE_DURATION_RUNNING_WORKOUT, showTimeComponent is set to false, and showWorkoutComponent to true', () => {
  const appState = {
    showTimeComponent: true,
    showGearComponent: false,
    showWorkoutComponent: false
  }
  const action = {
    type: SAVE_DURATION_RUNNING_WORKOUT
  }
  const expected = {
    showTimeComponent: false,
    showGearComponent: false,
    showWorkoutComponent: true
  }
  const actual = toggleComponentViews(appState, action)

  expect(actual.showTimeComponent).toBe(expected.showTimeComponent)
  expect(actual.showGearComponent).toBe(expected.showGearComponent)
  expect(actual.showWorkoutComponent).toBe(expected.showWorkoutComponent)
})

test('on SET_GEAR, showGearComponent is set to false and showWorkoutComponent is set to true', () => {
  const appState = {
    showGearComponent: true,
    showWorkoutComponent: false
  }
  const action = {
    type: SET_GEAR
  }
  const expected = {
    showGearComponent: false,
    showWorkoutComponent: true
  }
  const actual = toggleComponentViews(appState, action)

  expect(actual.showGearComponent).toBe(expected.showGearComponent)
  expect(actual.shoWorkout).toBe(expected.shoWorkout)
})

test('on BACK_HOME app returns to initial state', () => {
  const appState = {
    showHeader: true,
    showHomeComponent: false,
    showTimeComponent: true,
    showGearComponent: true,
    showWaitingComponent: false,
    showWorkoutComponent: true
  }
  const action = {
    type: BACK_HOME
  }

  const expected = initialState
  const actual = toggleComponentViews(appState, action)

  expect(actual.showHeader).toBe(expected.showHeader)
  expect(actual.showHomeComponent).toBe(expected.showHomeComponent)
  expect(actual.showTimeComponent).toBe(expected.showTimeComponent)
  expect(actual.showGearComponent).toBe(expected.showGearComponent)
  expect(actual.showWaitingComponent).toBe(expected.showWaitingComponent)
  expect(actual.showWorkoutComponent).toBe(expected.showWorkoutComponent)
})

test('on BACK_FROM_WOD showTimeComponent and showWaitingComponent are set to true, showWorkoutComponent is set to false', () => {
  const appState = {
    showTimeComponent: false,
    showWorkoutComponent: true

  }
  const action = {
    type: BACK_FROM_WOD,
    wodType: 'Running'
  }
  const expected = {
    showTimeComponent: true,
    showWorkoutComponent: false
  }
  const actual = toggleComponentViews(appState, action)

  expect(actual.showTimeComponent).toBe(expected.showTimeComponent)
  expect(actual.showWorkoutComponent).toBe(expected.showWorkoutComponent)
})

test('on BACK_FROM_WOD showTimeComponent and showGearComponent are set to true, showWorkoutComponent is set to false when wodType is not "Running"', () => {
  const appState = {
    showGearComponent: false,
    showWorkoutComponent: true

  }
  const action = {
    type: BACK_FROM_WOD,
    wodType: 'not running'
  }
  const expected = {
    showGearComponent: true,
    showWorkoutComponent: false
  }
  const actual = toggleComponentViews(appState, action)

  expect(actual.showGearComponent).toBe(expected.showGearComponent)
  expect(actual.showWorkoutComponent).toBe(expected.showWorkoutComponent)
})

test('on SHOW_WOD, waiting indicator is turn off by setting showWaitingComponent to false', () => {
  const appState = {
    showWaitingComponent: true
  }
  const action = {
    type: SHOW_WOD,
    workoutList: []
  }
  const expected = {
    showWaitingComponent: false
  }
  const actual = toggleComponentViews(appState, action)

  expect(actual.showWaitingComponent).toBe(expected.showWaitingComponent)
})
