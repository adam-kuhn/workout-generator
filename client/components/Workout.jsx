import React from 'react'
import request from 'superagent'

class Workout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      wod: ''
    }
  }

  componentDidMount () {
    request
      .post('/api/v1/workouts')
      .set('Content-Type', 'application/json')
      .send(this.props)
      .then(workout => {
        // console.log('on workout page', workout.body.result)
        // const wod = JSON.parse(worz/kout)
        const wod = workout.body.result[0]
        console.log('on workout page', wod)
        console.log('on workout page', wod.workout)
        console.log('on workout page', wod.description)
        this.setState({
          wod: wod
        })
      })
  }

  // have a button to display another/return to home
  render () {
    return (
      <div className='container'>
        <div className="header">
          <h1>{this.state.wod.workout || 'Your Workout'}</h1>
        </div>
        <div>
          <div className='flex-container'>
            <div className="general-form">
              <div className='form-body'>
                {/* description will come from props */}
                {/* will have to figure out how to display this nicely */}
                <p>{this.state.wod.description || 'GENERIC 3x20 Reverse Lunge (weighted), 15 toes 2 air - E2MOM for 10 min: 1 min wall sit, 1 min plank - 4x 10 walking lunges (weighted), 10 burpees'}
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
