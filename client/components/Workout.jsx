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
        const wod = workout.body.result[0] || 'There are no workouts based on your selection. Please try again'
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
          <h1>{this.state.wod.workout || 'Sorry'}</h1>
        </div>
        <div>
          <div className='flex-container'>
            <div className="general-form">
              <div className='form-body'>
                {/* description will come from props */}
                {/* will have to figure out how to display this nicely */}
                <p>{this.state.wod.description || this.state.wod}
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
