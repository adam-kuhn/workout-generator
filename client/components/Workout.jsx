import React from 'react'
import request from 'superagent'

class Workout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      workouts: '',
      allWorkouts: ''
    }
    this.randomizeWorkout = this.randomizeWorkout.bind(this)
  }

  randomizeWorkout(workouts) {
    const randomNumber = Math.floor(Math.random() * (workouts.length))
    return workouts[randomNumber]
  }

  componentDidMount () {
    request
      .post('/api/v1/workouts')
      .set('Content-Type', 'application/json')
      .send(this.props)
      .then(workout => {
        console.log(workout.body.result)
        let workouts = ''
        let allWorkouts = false
        if (workout.body.result.length < 1){
            workouts = 'There are no workouts based on your selection. Please try again'
        }
        else {
           allWorkouts = workout.body.result
           workouts = this.randomizeWorkout(allWorkouts)
          }
        this.setState({
          workouts,
          allWorkouts
        })  
      })
  }

  render () {
    return (
      <div className='container'>
        <div className="header">
          <h1>{this.state.workouts.workout || 'Sorry'}</h1>
        </div>
        <div>
          <div className='flex-container'>
            <div className="general-form">
              <div className='form-body'>
                {/* will have to figure out how to display this nicely */}
                <p>{this.state.workouts.description || this.state.workouts}
                </p>
              </div>
              {/* need to assing onClick=event handler to the button */}
              {/* go through the array to produce another...if null/undefined go back to [0] */}
              <button type='button'>Give me Another</button>
              {/* need to assing onClick=event handler to the button */}
              <button type='button'>See All</button>
              {/* need to assing onClick=event handler to the button */}
              <button type='button' onClick={this.props.home}>Start Over</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Workout
