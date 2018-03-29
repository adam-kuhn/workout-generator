import request from 'superagent'

export const SET_TYPE = 'SET_TYPE'
export const SET_TIME = 'SET_TIME'
export const SET_GEAR = 'SET_GEAR'
export const BACK_HOME = 'BACK_HOME'
export const BACK_TIME = 'BACK_TIME'
export const BACK_FROM_WOD = 'BACK_FROM_WOD'
export const SET_WOD = 'SET_WOD'
export const SHOW_WOD = 'SHOW_WOD'
export const NEW_NUM = 'NEW_NUM'

export const setType = (wodType) => {
  return {
    type: SET_TYPE,
    wodType
  }
}

export const setTime = (wodType, duration) => {
  return {
    type: SET_TIME,
    wodType,
    duration
  }
}

export const setGear = (gearList) => {
  return {
    type: SET_GEAR,
    gearList
  }
}

export const backHome = () => {
  return {
    type: BACK_HOME
  }
}

export const toTime = () => {
  return {
    type: BACK_TIME
  }
}

export const backFromWod = (wodType) => {
  return {
    type: BACK_FROM_WOD,
    wodType
  }
}

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
