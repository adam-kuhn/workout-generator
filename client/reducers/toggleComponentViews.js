import {SAVE_WORKOUT_TYPE_SHOW_TIME,
  SAVE_DURATION_SHOW_GEAR,
  SAVE_GEAR_SHOW_WORKOUT,
  SAVE_DURATION_RUNNING_WORKOUT,
  GO_BACK_TO_HOME, BACK_TIME,
  BACK_FROM_WOD} from '../actions/appNavigation'
import {SHOW_WOD} from '../actions/workout'

const initialState = {
  showHeaderComponent: false,
  showHomeComponent: true,
  showTimeComponent: false,
  showGearComponent: false,
  showWaitingComponent: true,
  showWorkoutComponent: false
}

function toggleComponentViews (state = initialState, action) {
  switch (action.type) {
    case (SAVE_WORKOUT_TYPE_SHOW_TIME): {
      return {
        ...state,
        showHeaderComponent: true,
        showHomeComponent: false,
        showTimeComponent: true
      }
    }
    case (SAVE_DURATION_RUNNING_WORKOUT): {
      return {
        ...state,
        showTimeComponent: false,
        showWorkoutComponent: true
      }
    }
    case (SAVE_DURATION_SHOW_GEAR): {
      return {
        ...state,
        showTimeComponent: false,
        showGearComponent: true
      }
    }
    // it weird that saveGearSelectionShowWorkout sets show gear to false
    // need better action names
    case (SAVE_GEAR_SHOW_WORKOUT): {
      return {
        ...state,
        showGearComponent: false,
        showWorkoutComponent: true
      }
    }
    case (GO_BACK_TO_HOME): {
      return initialState
    }
    case (BACK_TIME): {
      return {
        ...state,
        showGearComponent: false,
        showTimeComponent: true
      }
    }
    case (BACK_FROM_WOD): {
      const updatedState = {
        ...state,
        showWorkoutComponent: false
      }
      if (action.wodType === 'Running') {
        updatedState.showTimeComponent = true
      } else {
        updatedState.showGearComponent = true
      }

      return updatedState
    }

    case (SHOW_WOD): {
      return {
        ...state,
        showWaitingComponent: false
      }
    }
    default:
      return state
  }
}

export default toggleComponentViews
