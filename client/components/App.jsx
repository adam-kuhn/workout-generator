// Import modules
import React from 'react'
import {connect} from 'react-redux'
// components
import FormHeader from './FormHeader'
import Home from './Home'
import Time from './Time'
import Gear from './Gear'
import Workout from './Workout'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      workoutType: '',
      duration: '',
      gearList: []
    }
    // setting state from forms
    this.getType = this.getType.bind(this)
    this.getTime = this.getTime.bind(this)
    this.getGear = this.getGear.bind(this)
    // back buttons
    this.backToHome = this.backToHome.bind(this)
    this.backToTime = this.backToTime.bind(this)
    this.backToGear = this.backToGear.bind(this)
  }
  // get's workout type from Home component
  getType (type) {
    this.setState({
      workoutType: type,
      showHeader: true,
      showHome: false,
      showTime: true
    })
  }

  // get's time from Time componenet
  getTime (time) {
    // no gear for running workouts so go straight to workout page
    if (this.state.workoutType === 'Running') {
      this.setState({
        duration: time,
        showTime: false,
        showWorkout: true
      })
    } else {
      this.setState({
        duration: time,
        showTime: false,
        showGear: true
      })
    }
  }
  getGear (gear) {
    this.setState({
      gearList: gear,
      showGear: false,
      showWorkout: true
    })
  }
  // reverts to initial starting point
  backToHome () {
    this.setState({
      showHeader: false,
      showHome: true,
      showTime: false,
      showGear: false,
      showWorkout: false,
      workoutType: '',
      duration: '',
      gearList: []
    })
  }
  // display Time form
  backToTime () {
    this.setState({
      showTime: true,
      showGear: false,
      duration: ''
    })
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
            {this.props.display.showHeader && <FormHeader
              type={this.state.workoutType}
              duration={this.state.duration}
              gear={this.state.gearList}/>}
          </div>
          <div className='main-item'>
            {this.props.display.showHome && <Home />}

            {this.props.display.showTime && <Time back={this.backToHome}
              time={this.getTime}
              type={this.state.workoutType}/>}

            {this.props.display.showGear && <Gear
              back={this.backToTime}
              gear={this.getGear}
              type={this.state.workoutType}
              duration={this.state.duration}/>}

            {this.props.display.showWorkout && <Workout
              back={this.backToGear}
              type={this.state.workoutType}
              duration={this.state.duration}
              gear={this.state.gearList}
              home={this.backToHome} />}
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
