export const SET_TYPE = 'SET_TYPE'
export const SET_TIME = 'SET_TIME'
export const BACK_HOME = 'BACK_HOME'

export const setType = (wodType) => {
  return {
    type: SET_TYPE,
    variety: wodType
  }
}

export const setTime = (duration) => {
  return {
    type: SET_TIME,
    duration
  }
}

export const backHome = () => {
  return {
    type: BACK_HOME
  }
}
