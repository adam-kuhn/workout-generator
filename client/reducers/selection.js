import {SET_TYPE, SET_TIME, SET_GEAR, BACK_HOME} from '../actions'

const initialState = {
  wodType: '',
  duration: '',
  gear: []
}

function selection (state = initialState, action) {
  switch (action.type) {
    case (SET_TYPE): {
      return {
        ...state,
        wodType: action.wodType
      }
    }
    case (SET_TIME): {
      return {
        ...state,
        duration: action.duration
      }
    }
    case (SET_GEAR): {
      return {
        ...state,
        gear: action.gearList
      }
    }
    case (BACK_HOME): {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default selection
