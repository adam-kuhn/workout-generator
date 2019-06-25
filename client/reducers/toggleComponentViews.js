import {SAVE_WORKOUT_TYPE_SHOW_TIME, SET_TIME, SET_GEAR} from '../actions/selection'
import {BACK_HOME, BACK_TIME, BACK_FROM_WOD} from '../actions/back'
import {SHOW_WOD} from '../actions/workout'

const initialState = {
  showHeaderComponent: false,
  showHomeComponent: true,
  showTimeComponent: false,
  showGearComponent: false,
  showWaitingComponent: true,
  showWorkoutComponent: false
}

function toggleComponentViews (state = initialState, action) {
  switch (action.type) {
    case (SAVE_WORKOUT_TYPE_SHOW_TIME): {
      return {
        ...state,
        showHeaderComponent: true,
        showHomeComponent: false,
        showTimeComponent: true
      }
    }
    case (SET_TIME): {
      const updatedState = {
        ...state,
        showTimeComponent: false
      }
      if (action.wodType === 'Running') {
        updatedState.showWorkoutComponent = true
      } else {
        updatedState.showGearComponent = true
      }

      return updatedState
    }
    // it weird that setGear sets show gear to false
    // need better action names
    case (SET_GEAR): {
      return {
        ...state,
        showGearComponent: false,
        showWorkoutComponent: true
      }
    }
    case (BACK_HOME): {
      return initialState
    }
    case (BACK_TIME): {
      return {
        ...state,
        showGearComponent: false,
        showTimeComponent: true
      }
    }
    case (BACK_FROM_WOD): {
      const updatedState = {
        ...state,
        showWorkoutComponent: false
      }
      if (action.wodType === 'Running') {
        updatedState.showTimeComponent = true
      } else {
        updatedState.showGearComponent = true
      }

      return updatedState
    }

    case (SHOW_WOD): {
      return {
        ...state,
        showWaitingComponent: false
      }
    }
    default:
      return state
  }
}

export default toggleComponentViews
