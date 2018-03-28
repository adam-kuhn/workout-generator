import {SHOW_WOD, BACK_HOME, WOD_NUM} from '../actions'

const initialState = {
  workoutList: [],
  wodNumber: ''
}

function workouts (state = initialState, action) {
  switch (action.type) {
    case (SHOW_WOD): {
      return {
        ...state,
        workoutList: action.workoutList
      }
    }
    case (WOD_NUM): {
      return {
        ...state,
        wodNumber: action.number
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

export default workouts
