// Import modules
import React from 'react'

// components
import FormHeader from './FormHeader/FormHeader'
import Home from './Home/Home'
import Time from './Time/Time'
import Gear from './Gear/Gear'
import Workout from './Workout/Workout'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      showHeader: false,
      showHome: true,
      showTime: false,
      showGear: false,
      showWorkout: false,
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
      showGear: false
    })
  }

  render () {
    return (
      <div>
        <div>
          <h1>WOD Generator</h1>
          {this.state.showHeader && <FormHeader
            type={this.state.workoutType}
            duration={this.state.duration}
            gear={this.state.gearList}/>}

          {this.state.showHome && <Home getType={this.getType} />}

          {this.state.showTime && <Time back={this.backToHome}
            time={this.getTime}
            type={this.state.workoutType}/>}

          {this.state.showGear && <Gear
            back={this.backToTime}
            gear={this.getGear}
            type={this.state.workoutType}
            duration={this.state.duration}/>}

          {this.state.showWorkout && <Workout
            type={this.state.workoutType}
            duration={this.state.duration}
            gear={this.state.gearList}
            home={this.backToHome} />}
        </div>
      </div>
    )
  }
}

export default App
