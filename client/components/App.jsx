import React from 'react'
import {connect} from 'react-redux'

import FormHeader from './FormHeader'
import Home from './Home'
import Time from './Time'
import Gear from './Gear'
import Workout from './Workout'

const App = (props) => {
  const {
    showHomeComponent,
    showTimeComponent,
    showGearComponent,
    showWorkoutComponent,
    showHeaderComponent
  } = props
  return (
    <div>
      <div className='main-container'>
        <div className='main-item'>
          <h1 className='main-title'>OCR WOD Generator</h1>
        </div>
        <div className='main-item'>
          {showHeaderComponent && <FormHeader/>}
        </div>
        <div className='main-item'>
          {showHomeComponent && <Home />}
          {showTimeComponent && <Time />}
          {showGearComponent && <Gear />}
          {showWorkoutComponent && <Workout />}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state.display
}

export default connect(mapStateToProps)(App)
