import request from 'superagent'

export const SHOW_WOD = 'SHOW_WOD'
export const NEW_NUM = 'NEW_NUM'

const showWorkouts = (workout) => {
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
        dispatch(showWorkouts(workout))
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
