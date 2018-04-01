import React from 'react'
import {connect} from 'react-redux'
import {setType} from '../actions/selection'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      workoutType: '',
      disable: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.selectedWorkout = this.selectedWorkout.bind(this)
  }
  selectedWorkout (evt) {
    this.setState({
      workoutType: evt.target.value,
      disable: false
    })
  }

  handleClick () {
    this.props.dispatch(setType(this.state.workoutType))
  }

  render () {
    return (
      <div className='form-container'>
        <div className="header">
          <h1>Select Your Style: </h1>
        </div>
        <div>
          <div className='flex-container'>
            <form className="general-form">
              <div className='form-body'>
                <label>Running
                  <input className='general-input' type='radio' name='type' value='Running'
                    checked={this.state.workoutType === 'Running'} onChange={this.selectedWorkout}/>
                </label>
                <label>Strength
                  <input className='general-input' type='radio' name='type' value='Strength'
                    checked={this.state.workoutType === 'Strength'} onChange={this.selectedWorkout} />
                </label>
                <label>OCR
                  <input className='ocr-input' type='radio' name='type' value='OCR'
                    checked={this.state.workoutType === 'OCR'} onChange={this.selectedWorkout}/>
                </label>
              </div>
              <button type='button' onClick={this.handleClick} disabled={this.state.disable}>Next</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Home)
