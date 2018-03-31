export const SET_TYPE = 'SET_TYPE'
export const SET_TIME = 'SET_TIME'
export const SET_GEAR = 'SET_GEAR'

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