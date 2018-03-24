import {SET_TYPE, SET_TIME, BACK_HOME} from '../actions'

const initialState = {
  variety: '',
  duration: '',
  gear: []
}

function selection (state = initialState, action) {
  switch (action.type) {
    case (SET_TYPE): {
      return {
        ...state,
        variety: action.variety
      }
    }
    case (SET_TIME): {
      return {
        ...state,
        duration: action.duration
      }
    }
    case (BACK_HOME): {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default selection
