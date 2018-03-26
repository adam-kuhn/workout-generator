import React from 'react'
import {connect} from 'react-redux'

import {getWorkouts} from '../actions'
// import request from 'superagent'

class Workout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      noneAvailable: '',
      allWorkouts: '',
      workoutNumber: ''
    }
    this.anotherWorkout = this.anotherWorkout.bind(this)
  }

  randomizeWorkout (workouts) {
    const randomNumber = Math.floor(Math.random() * (workouts.length))
    this.setState({
      workoutNumber: randomNumber
    })
  }

  componentDidMount () {
    this.props.dispatch(getWorkouts(this.props.selection))
  }

  anotherWorkout () {
    const nextWorkout = this.state.workoutNumber + 1
    if (nextWorkout === this.state.allWorkouts.length) {
      this.setState({
        workoutNumber: 0
      })
    } else {
      this.setState({
        workoutNumber: nextWorkout
      })
    }
  }

  render () {
    return (
      <div className='form-container'>
        <div className="header">
          <h1 className='wod-title'>{this.props.wod ? this.props.wod.workout : 'Sorry'}</h1>
        </div>
        <div>
          <div className='flex-container'>
            <div className="general-form">
              <div className='form-body'>
                <div className='wod-desc'>
                  <p>{this.props.wod ? this.props.wod.description : 'There are no available workouts based on your selection. Please try again.'}
                  </p>
                  <p>Number of Workouts: {this.props.wod ? this.props.list.length : 0}</p>
                </div>
              </div>
              <button type='button' onClick={this.anotherWorkout}>Give me Another</button>
              <button type='button' onClick={this.props.back}>Back</button>
              <button type='button' onClick={this.props.home}>Start Over</button>
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
    wod: state.workouts.workoutList[0],
    list: state.workouts.workoutList
  }
}

export default connect(mapStateToProps)(Workout)
