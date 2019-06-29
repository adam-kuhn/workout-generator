import React from 'react'
import {connect} from 'react-redux'

import {goBackToGearSelection, goBackToTime, goBackToHome} from '../actions/appNavigation'
import {getWorkouts, newNumber} from '../actions/workout'
import WaitingIcon from './WaitingIcon'

class Workout extends React.Component {
  constructor () {
    super()
    this.handleBack = this.handleBack.bind(this)
    this.handleHome = this.handleHome.bind(this)
    this.anotherWorkout = this.anotherWorkout.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getWorkouts(this.props.selection))
  }

  handleBack () {
    if (this.props.selection.wodType === 'Running') {
      this.props.dispatch(goBackToTime())
    } else {
      this.props.dispatch(goBackToGearSelection())
    }
  }
  handleHome () {
    this.props.dispatch(goBackToHome())
  }
  anotherWorkout () {
    this.props.dispatch(newNumber(this.props.wodNumber, this.props.wod))
  }
  render () {
    return (
      <div className='form-container'>
        {this.props.showWaitingComponent ? <WaitingIcon />
          : <div>
            <div className="header">
              <h1 className='wod-title'>{this.props.wod[this.props.wodNumber] ? this.props.wod[this.props.wodNumber].workout : 'Sorry'}</h1>
            </div>
            <div>
              <div className='flex-container'>
                <div className="general-form">
                  <div className='form-body'>
                    <div className='wod-desc'>

                      <p>{this.props.wod[this.props.wodNumber] ? this.props.wod[this.props.wodNumber].description : 'There are no available workouts based on your selection. Please try again.'}
                      </p>
                      <p>Number of Workouts: {this.props.wod ? this.props.wod.length : 0}</p>
                    </div>
                  </div>
                  <button type='button' onClick={this.anotherWorkout}>Give me Another</button>
                  <button type='button' onClick={this.handleBack}>Back</button>
                  <button type='button' onClick={this.handleHome}>Start Over</button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    selection: state.selection,
    wod: state.workouts.workoutList,
    wodNumber: state.workouts.wodNumber,
    showWaitingComponent: state.toggleComponentViews.showWaitingComponent
  }
}

export default connect(mapStateToProps)(Workout)
