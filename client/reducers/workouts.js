import {SHOW_WOD} from '../actions'

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
    default: {
      return state
    }
  }
}

export default workouts
