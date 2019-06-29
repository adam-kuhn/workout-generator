import {SAVE_WORKOUT_TYPE_SHOW_TIME,
  SAVE_DURATION_SHOW_GEAR, SAVE_GEAR_SHOW_WORKOUT,
  SAVE_DURATION_RUNNING_WORKOUT} from '../actions/selection'
import {BACK_HOME, BACK_TIME, BACK_FROM_WOD} from '../actions/back'

const initialState = {
  wodType: '',
  duration: '',
  gear: []
}

function selection (state = initialState, action) {
  switch (action.type) {
    case (SAVE_WORKOUT_TYPE_SHOW_TIME): {
      return {
        ...state,
        wodType: action.wodType
      }
    }
    case (SAVE_DURATION_RUNNING_WORKOUT): {
      return {
        ...state,
        duration: action.duration
      }
    }
    case (SAVE_DURATION_SHOW_GEAR): {
      return {
        ...state,
        duration: action.duration
      }
    }
    case (SAVE_GEAR_SHOW_WORKOUT): {
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
