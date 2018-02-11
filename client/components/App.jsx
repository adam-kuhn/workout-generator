
// Import modules
import React from 'react'

// components
import Home from './Home'
import Time from './Time'
import Gear from './Gear'
import Workout from './Workout'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      showHome: true,
      showTime: false,
      showGear: false,
      showWorkout: false,
      workoutType: '',
      duration: ''
    }
    // setting state from forms
    this.getType = this.getType.bind(this)
    this.getTime = this.getTime.bind(this)
    // back buttons
    this.backToHome = this.backToHome.bind(this)
    this.backToTime = this.backToTime.bind(this)
  }
  // get's workout type from Home component
  getType (type) {
    this.setState({
      workoutType: type,
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
    console.log(gear)
  }
  // reverts to initial starting point
  backToHome () {
    this.setState({
      showHome: true,
      showTime: false,
      showGear: false,
      showWorkout: false
    })
  }
  // display Time form
  backToTime () {
    this.setState({
      showTime: true,
      showGear: false
    })
  }

  render () {
    return (
      <div>
        <div >
          <h1>WOD Generator</h1>
          {this.state.showHome && <Home getType={this.getType} />}
          {this.state.showTime && <Time back={this.backToHome} time={this.getTime}/>}
          {this.state.showGear && <Gear back={this.backToTime} gear={this.getGear} />}
          {this.state.showWorkout && <Workout />}
        </div>
      </div>
    )
  }
}

export default App
