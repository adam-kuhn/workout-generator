import {SET_TYPE} from '../actions'

const initialState = {}

function selection (state = initialState, action) {
  switch (action.type) {
    case (SET_TYPE): {
      return {
        ...state,
        variety: action.variety
      }
    }
    default: {
      return state
    }
  }
}

export default selection
