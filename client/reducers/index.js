import {combineReducers} from 'redux'

import display from './display'
import selection from './selection'

export default combineReducers({
  display,
  selection
})
