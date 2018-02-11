
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
      workoutType: null
    }
  }
  render () {
    return (
      <div>
        <div >
          <h1>WOD Generator</h1>
          {this.state.showHome && <Home />}
          {this.state.showTime && <Time />}
          {this.state.showGear && <Gear />}
          {this.state.showWorkout && <Workout />}
        </div>
      </div>
    )
  }
}

export default App
