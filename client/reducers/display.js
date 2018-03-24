import {SET_TYPE, SET_TIME} from '../actions'

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
      return {
        ...state,
        showTime: false,
        showGear: true
      }
    }
    default:
      return state
  }
}

export default display
