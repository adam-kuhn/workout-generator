import React from 'react'
import request from 'superagent'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      workoutType: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.selectedWorkout = this.selectedWorkout.bind(this)
  }
  selectedWorkout (evt) {
    this.setState({
      workoutType: evt.target.value
    })
  }

  handleClick () {
    request
      .get('/test')
      // .set('Content-Type', 'application/json')
      // .sesnd()
      .then(result => {
      })
  }
  render () {
    return (
      <div className='container'>
        <div className="header">
          <h1>Select Your Style: </h1>
        </div>
        <div>
          <div className='flex-container'>
            <form className="general-form">
              <div className='form-body'>
                <label>Running
                <input className='general-input' type='radio' name='type' value='running'
                  checked={this.state.workoutType === 'running'} onChange={this.selectedWorkout}/>
                </label>
                <label>Strength
                <input className='strength-input' type='radio' name='type' value='strength'
                  checked={this.state.workoutType === 'strength'} onChange={this.selectedWorkout} />
                </label>
                <label>OCR
                <input className='ocr-input' type='radio' name='type' value='ocr'
                  checked={this.state.workoutType === 'ocr'} onChange={this.selectedWorkout}/>
                </label>
              </div>
              <button type='button' onClick={this.handleClick}>Next</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
