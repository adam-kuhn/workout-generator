import {SHOW_WOD, BACK_HOME} from '../actions'

const initialState = {
  workoutList: []
}

function workouts (state = initialState, action) {
  switch (action.type) {
    case (SHOW_WOD): {
      return {
        workoutList: action.workoutList
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
