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
    this.getGear = this.getGear.bind(this)
    // back buttons
    this.backToTime = this.backToTime.bind(this)
    this.backToGear = this.backToGear.bind(this)
  }

  getGear (gear) {
    this.setState({
      gearList: gear,
      showGear: false,
      showWorkout: true
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
            {this.props.display.showHeader && <FormHeader/>}
          </div>
          <div className='main-item'>
            {this.props.display.showHome && <Home />}

            {this.props.display.showTime && <Time />}

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
