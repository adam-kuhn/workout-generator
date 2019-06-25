import request from 'superagent'

export const SHOW_WOD = 'SHOW_WOD'
export const NEW_NUM = 'NEW_NUM'

const showWorkoutComponents = (workout) => {
  return {
    type: SHOW_WOD,
    workoutList: workout.body
  }
}

export const getWorkouts = (selection) => {
  return dispatch => {
    request
      .post('/api/v1/workouts')
      .set('Content-Type', 'application/json')
      .send(selection)
      .then(workout => {
        console.log(workout)
        dispatch(showWorkoutComponents(workout))
      }
      )
  }
}

export const newNumber = (oldNumber, workoutList) => {
  return {
    type: NEW_NUM,
    oldNumber,
    workoutList
  }
}
