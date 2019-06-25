export const SAVE_WORKOUT_TYPE_SHOW_TIME = 'SAVE_WORKOUT_TYPE_SHOW_TIME'
export const SET_TIME = 'SET_TIME'
export const SET_GEAR = 'SET_GEAR'

export const saveWorkoutTypeMoveToTime = (wodType) => {
  return {
    type: SAVE_WORKOUT_TYPE_SHOW_TIME,
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
