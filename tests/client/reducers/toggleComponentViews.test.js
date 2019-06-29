import toggleComponentViews from '../../../client/reducers/toggleComponentViews'
import {SAVE_WORKOUT_TYPE_SHOW_TIME,
  SAVE_DURATION_SHOW_GEAR,
  SAVE_DURATION_RUNNING_WORKOUT,
  SAVE_GEAR_SHOW_WORKOUT,
  GO_BACK_TO_HOME,
  GO_BACK_TO_TIME,
  BACK_TO_GEAR_LIST_SELECTION} from '../../../client/actions/appNavigation'
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

test('on SAVE_GEAR_SHOW_WORKOUT, showGearComponent is set to false and showWorkoutComponent is set to true', () => {
  const appState = {
    showGearComponent: true,
    showWorkoutComponent: false
  }
  const action = {
    type: SAVE_GEAR_SHOW_WORKOUT
  }
  const expected = {
    showGearComponent: false,
    showWorkoutComponent: true
  }
  const actual = toggleComponentViews(appState, action)

  expect(actual.showGearComponent).toBe(expected.showGearComponent)
  expect(actual.shoWorkout).toBe(expected.shoWorkout)
})

test('on GO_BACK_TO_HOME app returns to initial state', () => {
  const appState = {
    showHeader: true,
    showHomeComponent: false,
    showTimeComponent: true,
    showGearComponent: true,
    showWaitingComponent: false,
    showWorkoutComponent: true
  }
  const action = {
    type: GO_BACK_TO_HOME
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

test('on GO_BACK_TO_TIME showTimeComponent is set to true everything else is false', () => {
  const appState = {
    showTimeComponent: false,
    showWorkoutComponent: true
  }
  const action = {
    type: GO_BACK_TO_TIME
  }
  const expected = {
    showTimeComponent: true,
    showWorkoutComponent: false
  }
  const actual = toggleComponentViews(appState, action)

  expect(actual.showTimeComponent).toBe(expected.showTimeComponent)
  expect(actual.showWorkoutComponent).toBe(expected.showWorkoutComponent)
})

test('on BACK_TO_GEAR_LIST_SELECTION showGearComponent is set to true, showWorkoutComponent is set to false', () => {
  const appState = {
    showGearComponent: false,
    showWorkoutComponent: true

  }
  const action = {
    type: BACK_TO_GEAR_LIST_SELECTION
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
