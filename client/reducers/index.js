import {combineReducers} from 'redux'

import display from './display'
import selection from './selection'
import workouts from './workouts'
import gear from './config/gear'

export default combineReducers({
  display,
  selection,
  workouts,
  gear
})
