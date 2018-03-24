import request from 'superagent'

export const SET_TYPE = 'SET_TYPE'
export const SET_TIME = 'SET_TIME'
export const SET_GEAR = 'SET_GEAR'
export const BACK_HOME = 'BACK_HOME'

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

const workoutList = (workouts) => {
  return {
    type: SET_GEAR,
    workouts
  }
}

export const selectedGear = (gearList) => {
  request
    .post('/api/v1/workouts')
    .set('Content-Type', 'application/json')
    .send({gearList})
    .then(workouts => {
      return (dispatch) => {
        return dispatch(workoutList(workouts))
      }
    })
}

export const backHome = () => {
  return {
    type: BACK_HOME
  }
}
