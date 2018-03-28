import React from 'react'
import {connect} from 'react-redux'

import {getWorkouts, backFromWod, backHome, wodNumber} from '../actions'

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
    this.props.dispatch(backFromWod(this.props.selection.wodType))
  }
  handleHome () {
    this.props.dispatch(backHome())
  }
  anotherWorkout () {
    console.log('num', this.props.wodNumber)
  //   const nextWorkout = this.state.workoutNumber + 1
  //   if (nextWorkout === this.state.allWorkouts.length) {
  //     this.setState({
  //       workoutNumber: 0
  //     })
  //   } else {
  //     this.setState({
  //       workoutNumber: nextWorkout
  //     })
  //   }
  }
  randomizeWorkout (workouts) {
    if (workouts.length === 1) {
      this.setState({
        randomNum: 0
      })
    } else {
      this.setState({
        randomNum: Math.floor(Math.random() * (workouts.length))
      })
    }
  }
  render () {
    const randomNum = this.randomizeWorkout(this.props.wod) || 0
    this.props.dispatch(wodNumber(randomNum))
    return (
      <div className='form-container'>
        <div className="header">
          <h1 className='wod-title'>{this.props.wod[randomNum] ? this.props.wod[randomNum].workout : 'Sorry'}</h1>
        </div>
        <div>
          <div className='flex-container'>
            <div className="general-form">
              <div className='form-body'>
                <div className='wod-desc'>
                  <p>{this.props.wod[randomNum] ? this.props.wod[randomNum].description : 'There are no available workouts based on your selection. Please try again.'}
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
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    selection: state.selection,
    wod: state.workouts.workoutList,
    wodNumber: state.workouts.wodNumber
  }
}

export default connect(mapStateToProps)(Workout)
