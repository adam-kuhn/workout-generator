import React from 'react'

class Workout extends React.Component {
  constructor (props) {
    super(props)

  }

  // take props and display the workout
  // have a button to display another/return to home
  render () {
    return (
    <div className='container'>
      <div className="header">
        {/* this will be the title from props */}
        {/* <h1>{props.type}: {props.duration} min</h1>
        {props.gear.map(item => {
          return (
            <span key={item}>{item} </span>
          )
        })} */}
        <h1>Your Workout</h1>
      </div>
      <div>
        <div className='flex-container'>
          <div className="general-form">
            <div className='form-body'>
              {/* description will come from props */}
              {/* will have to figure out how to display this nicely */}
              <p>3x20 Reverse Lunge (weighted), 15 toes 2 air - E2MOM for 10 min: 1 min wall sit, 1 min plank - 4x 10 walking lunges (weighted), 10 burpees
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
