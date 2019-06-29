export const SAVE_WORKOUT_TYPE_SHOW_TIME = 'SAVE_WORKOUT_TYPE_SHOW_TIME'
export const SAVE_DURATION_SHOW_GEAR = 'SAVE_DURATION_SHOW_GEAR'
export const SAVE_DURATION_RUNNING_WORKOUT = 'SAVE_DURATION_RUNNING_WORKOUT'
export const SAVE_GEAR_SHOW_WORKOUT = 'SAVE_GEAR_SHOW_WORKOUT'
export const GO_BACK_TO_HOME = 'GO_BACK_TO_HOME'
export const GO_BACK_TO_TIME = 'GO_BACK_TO_TIME'
export const BACK_TO_GEAR_LIST_SELECTION = 'BACK_TO_GEAR_LIST_SELECTION'

export const saveWorkoutTypeMovegoBackToTime = (wodType) => {
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

export const saveGearSelectionShowWorkout = (gearList) => {
  return {
    type: SAVE_GEAR_SHOW_WORKOUT,
    gearList
  }
}

export const goBackToHome = () => {
  return {
    type: GO_BACK_TO_HOME
  }
}

export const goBackToTime = () => {
  return {
    type: GO_BACK_TO_TIME
  }
}

export const goBackToGearSelection = () => {
  return {
    type: BACK_TO_GEAR_LIST_SELECTION
  }
}
