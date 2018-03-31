export const BACK_HOME = 'BACK_HOME'
export const BACK_TIME = 'BACK_TIME'
export const BACK_FROM_WOD = 'BACK_FROM_WOD'

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
