// Import modules
import React from 'react'
import {connect} from 'react-redux'
// components
import FormHeader from './FormHeader'
import Home from './Home'
import Time from './Time'
import Gear from './Gear'
import Workout from './Workout'
import Waiting from './Waiting'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      workoutType: '',
      duration: '',
      gearList: []
    }
    this.backToGear = this.backToGear.bind(this)
  }

  backToGear () {
    this.setState({
      showWorkout: false,
      showGear: true,
      gearList: []
    })
  }

  render () {
    return (
      <div>
        <div className='main-container'>
          <div className='main-item'>
            <h1 className='main-title'>WOD Generator</h1>
          </div>
          <div className='main-item'>
            {this.props.display.showHeader && <FormHeader/>}
          </div>
          <div className='main-item'>
            {this.props.display.showHome && <Home />}

            {this.props.display.showTime && <Time />}

            {this.props.display.showGear && <Gear />}
            {this.props.display.showWaiting && <Waiting />}
            {this.props.display.showWorkout && <Workout />}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    display: state.display
  }
}

export default connect(mapStateToProps)(App)
