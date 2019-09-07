import {SAVE_WORKOUT_TYPE_SHOW_TIME,
  SAVE_DURATION_SHOW_GEAR, SAVE_GEAR_SHOW_WORKOUT,
  SAVE_DURATION_RUNNING_WORKOUT, GO_BACK_TO_HOME, GO_BACK_TO_TIME, BACK_TO_GEAR_LIST_SELECTION} from '../actions/appNavigation'

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
    case (GO_BACK_TO_HOME): {
      return initialState
    }
    case (GO_BACK_TO_TIME): {
      return {
        ...state,
        duration: ''
      }
    }
    case (BACK_TO_GEAR_LIST_SELECTION): {
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
