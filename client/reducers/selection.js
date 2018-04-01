import {SET_TYPE, SET_TIME, SET_GEAR} from '../actions/selection'
import {BACK_HOME, BACK_TIME, BACK_FROM_WOD} from '../actions/back'

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
    case (BACK_TIME): {
      return {
        ...state,
        duration: ''
      }
    }
    case (BACK_FROM_WOD): {
      if (action.wodType === 'Running') {
        return {
          ...state,
          duration: ''
        }
      }
      return {
        ...state,
        gear: []
      }
    }
    default: {
      return state
    }
  }
}

export default selection
