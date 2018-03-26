import {SET_TYPE, SET_TIME, SET_GEAR, SHOW_WOD, BACK_HOME, BACK_TIME} from '../actions'

const initialState = {
  showHeader: false,
  showHome: true,
  showTime: false,
  showGear: false,
  showWaiting: false,
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
        showWaiting: true
      }
    }
    case (SHOW_WOD): {
      return {
        ...state,
        showWaiting: false,
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
    default:
      return state
  }
}

export default display
