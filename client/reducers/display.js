import {SET_TYPE, SET_TIME, SET_GEAR, BACK_HOME} from '../actions'

const initialState = {
  showHeader: false,
  showHome: true,
  showTime: false,
  showGear: false,
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
    default:
      return state
  }
}

export default display
