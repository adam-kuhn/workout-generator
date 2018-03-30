import {combineReducers} from 'redux'

import display from './display'
import selection from './selection'
import workouts from './workouts'
import gear from './gear'

export default combineReducers({
  display,
  selection,
  workouts,
  gear
})
