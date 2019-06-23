import React from 'react'
import {connect} from 'react-redux'

import FormHeader from './FormHeader'
import Home from './Home'
import Time from './Time'
import Gear from './Gear'
import Workout from './Workout'

const App = (props) => {
  const {showHome, showTime, showGear, showWorkout, showHeader} = props
  return (
    <div>
      <div className='main-container'>
        <div className='main-item'>
          <h1 className='main-title'>OCR WOD Generator</h1>
        </div>
        <div className='main-item'>
          {showHeader && <FormHeader/>}
        </div>
        <div className='main-item'>
          {showHome && <Home />}
          {showTime && <Time />}
          {showGear && <Gear />}
          {showWorkout && <Workout />}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state.display
}

export default connect(mapStateToProps)(App)
