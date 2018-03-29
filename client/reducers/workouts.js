import {SHOW_WOD, BACK_HOME, WOD_NUM} from '../actions'

const initialState = {
  workoutList: [],
  wodNumber: ''
}

function randomizeWorkout (workouts) {
  if (workouts.length === 1) {
    return 0
  } else {
    return Math.floor(Math.random() * (workouts.length))
  }
}

function workouts (state = initialState, action) {
  switch (action.type) {
    case (SHOW_WOD): {
      const randomNum = randomizeWorkout(action.workoutList)
      return {
        ...state,
        workoutList: action.workoutList,
        wodNumber: randomNum
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
