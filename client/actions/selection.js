export const SAVE_WORKOUT_TYPE_SHOW_TIME = 'SAVE_WORKOUT_TYPE_SHOW_TIME'
export const SAVE_DURATION_SHOW_GEAR = 'SAVE_DURATION_SHOW_GEAR'
export const SAVE_DURATION_RUNNING_WORKOUT = 'SAVE_DURATION_RUNNING_WORKOUT'
export const SET_GEAR = 'SET_GEAR'

export const saveWorkoutTypeMoveToTime = (wodType) => {
  return {
    type: SAVE_WORKOUT_TYPE_SHOW_TIME,
    wodType
  }
}

export const saveDurationShowGearSelection = (duration) => {
  return {
    type: SAVE_DURATION_SHOW_GEAR,
    duration
  }
}

export const saveDurationShowRunningWorkout = (duration) => {
  return {
    type: SAVE_DURATION_RUNNING_WORKOUT,
    duration
  }
}

export const setGear = (gearList) => {
  return {
    type: SET_GEAR,
    gearList
  }
}
