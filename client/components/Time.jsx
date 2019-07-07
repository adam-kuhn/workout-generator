import React from 'react'
import {connect} from 'react-redux'

import {saveDurationShowRunningWorkout,
  saveDurationShowGearSelection,
  goBackToHome
} from '../actions/appNavigation'

class Time extends React.Component {
  constructor () {
    super()
    this.state = {
      workoutDuration: '',
      disableNextButton: true
    }
    this.selectWorkoutDuration = this.selectWorkoutDuration.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  selectWorkoutDuration (evt) {
    this.setState({
      workoutDuration: evt.target.value,
      disableNextButton: false
    })
  }

  handleClick () {
    if (this.props.wodType === 'Running') {
      this.props.dispatch(saveDurationShowRunningWorkout(this.state.workoutDuration))
    } else {
      this.props.dispatch(
        saveDurationShowGearSelection(this.state.workoutDuration)
      )
    }
  }

  goBack () {
    this.props.dispatch(goBackToHome())
  }

  render () {
    return (
      <div className='form-container'>
        <div className="header">
          <h1>Select workoutDuration: </h1>
        </div>
        <div>
          <div className='flex-container'>
            <form className="general-form">
              <div className='form-body'>
                <label>0-20 min
                  <input className='input-0-20' type='radio' name='time' value='0-20 min'
                    checked={this.state.workoutDuration === '0-20 min'} onChange={this.selectWorkoutDuration} />
                </label>
                <label>20-40 min
                  <input className='general-input' type='radio' name='time' value='20-40 min'
                    checked={this.state.workoutDuration === '20-40 min'} onChange={this.selectWorkoutDuration} />
                </label>
                <label>40-60 min
                  <input className='general-input' type='radio' name='time' value='40-60 min'
                    checked={this.state.workoutDuration === '40-60 min'} onChange={this.selectWorkoutDuration}/>
                </label>
                <label>&gt;60 min
                  <input className='input-60' type='radio' name='time' value='>60 min'
                    checked={this.state.workoutDuration === '>60 min'} onChange={this.selectWorkoutDuration} />
                </label>
              </div>
              <button type='button' onClick={this.handleClick} disabled={this.state.disableNextButton}>Next</button>
              <button type='button' onClick={this.goBack}>Back</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    wodType: state.selection.wodType
  }
}

export default connect(mapStateToProps)(Time)
