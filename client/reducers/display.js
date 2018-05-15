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
      if (action.wodType === 'Running') {
        return {
          ...state,
          showTime: false,
          showWorkout: true
        }
      }
      return {
        ...state,
        showTime: false,
        showGear: true
      }
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
      if (action.wodType === 'Running') {
        return {
          ...state,
          showTime: true,
          showWorkout: false
        }
      }
      return {
        ...state,
        showGear: true,
        showWorkout: false
      }
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
