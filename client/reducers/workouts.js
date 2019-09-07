import {SHOW_WOD, GO_BACK_TO_HOME, NEW_NUM} from '../actions/workout'

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

function anotherWorkout (oldWodNum, workouts) {
  const newWodNum = oldWodNum + 1
  if (newWodNum === workouts.length) {
    return 0
  } else {
    return newWodNum
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
    case (NEW_NUM): {
      const newNumber = anotherWorkout(action.oldNumber, action.workoutList)
      return {
        ...state,
        wodNumber: newNumber

      }
    }
    case (GO_BACK_TO_HOME): {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default workouts
