import {SET_TYPE, SET_TIME, SET_GEAR} from '../actions/selection'
import {BACK_HOME, BACK_TIME, BACK_FROM_WOD} from '../actions/back'
import {SHOW_WOD} from '../actions/workout'

const initialState = {
  showHeader: false,
  showHome: true,
  showTime: false,
  showGear: false,
  showWaiting: true,
  showWorkout: false
}

function display (state = initialState, action) {
  switch (action.type) {
    case (SET_TYPE): {
      return {
        ...state,
        showHeader: true,
        showHome: false,
        showTime: true
      }
    }
    case (SET_TIME): {
      const updatedState = {
        ...state,
        showTime: false
      }
      if (action.wodType === 'Running') {
        updatedState.showWorkout = true
      } else {
        updatedState.showGear = true
      }

      return updatedState
    }

    case (SET_GEAR): {
      return {
        ...state,
        showGear: false,
        showWorkout: true
      }
    }
    case (BACK_HOME): {
      return initialState
    }
    case (BACK_TIME): {
      return {
        ...state,
        showGear: false,
        showTime: true
      }
    }
    case (BACK_FROM_WOD): {
      const updatedState = {
        ...state,
        showWorkout: false,
        showWaiting: true
      }
      if (action.wodType === 'Running') {
        updatedState.showTime = true
      } else {
        updatedState.showGear = true
      }
      return updatedState
    }
    case (SHOW_WOD): {
      return {
        ...state,
        showWaiting: false
      }
    }
    default:
      return state
  }
}

export default display
