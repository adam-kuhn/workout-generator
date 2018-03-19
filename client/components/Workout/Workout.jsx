import React from 'react'
import request from 'superagent'
import './Workout.css'

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
    request
      .post('/api/v1/workouts')
      .set('Content-Type', 'application/json')
      .send(this.props)
      .then(workout => {
        let noneAvailable = ''
        let allWorkouts = false
        if (workout.body.result.length < 1) {
          noneAvailable = 'There are no workouts based on your selection. Please try again'
        } else {
          allWorkouts = workout.body.result
          this.randomizeWorkout(allWorkouts)
        }
        this.setState({
          noneAvailable,
          allWorkouts
        })
      })
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
          <h1>{this.state.allWorkouts ? this.state.allWorkouts[this.state.workoutNumber].workout : 'Sorry'}</h1>
        </div>
        <div>
          <div className='flex-container'>
            <div className="general-form">
              <div className='form-body'>
                {/* will have to figure out how to display this nicely */}
                <p>{this.state.allWorkouts ? this.state.allWorkouts[this.state.workoutNumber].description : this.state.noneAvailable}
                </p>
                <p>Number of Workouts: {this.state.allWorkouts.length || 0}</p>
              </div>
              <button type='button' onClick={this.anotherWorkout}>Give me Another</button>
              <button type='button' onClick={this.props.home}>Start Over</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Workout
