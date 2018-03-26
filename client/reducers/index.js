import {combineReducers} from 'redux'

import display from './display'
import selection from './selection'
import workouts from './workouts'

export default combineReducers({
  display,
  selection,
  workouts
})
