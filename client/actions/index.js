export const SET_TYPE = 'SET_TYPE'
export const SET_TIME = 'SET_TIME'
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

export const backHome = () => {
  return {
    type: BACK_HOME
  }
}
