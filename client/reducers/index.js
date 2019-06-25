import {combineReducers} from 'redux'

import toggleComponentViews from './toggleComponentViews'
import selection from './selection'
import workouts from './workouts'
import gear from './config/gear'

export default combineReducers({
  toggleComponentViews,
  selection,
  workouts,
  gear
})
