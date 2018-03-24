import React from 'react'
import {connect} from 'react-redux'

import {setTime, backHome} from '../actions'

class Time extends React.Component {
  constructor () {
    super()
    this.state = {
      duration: '',
      disable: true
    }
    this.selectedTime = this.selectedTime.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  selectedTime (evt) {
    this.setState({
      duration: evt.target.value,
      disable: false
    })
  }

  handleClick () {
    this.props.dispatch(setTime(this.props.wodType, this.state.duration))
  }

  goBack () {
    this.props.dispatch(backHome())
  }

  render () {
    return (
      <div className='form-container'>
        <div className="header">
          <h1>Select Duration: </h1>
        </div>
        <div>
          <div className='flex-container'>
            <form className="general-form">
              <div className='form-body'>
                <label>0-20 min
                  <input className='input-0-20' type='radio' name='time' value='0-20 min'
                    checked={this.state.duration === '0-20 min'} onChange={this.selectedTime} />
                </label>
                <label>20-40 min
                  <input className='general-input' type='radio' name='time' value='20-40 min'
                    checked={this.state.duration === '20-40 min'} onChange={this.selectedTime} />
                </label>
                <label>40-60 min
                  <input className='general-input' type='radio' name='time' value='40-60 min'
                    checked={this.state.duration === '40-60 min'} onChange={this.selectedTime}/>
                </label>
                <label>&gt;60 min
                  <input className='input-60' type='radio' name='time' value='>60 min'
                    checked={this.state.duration === '>60 min'} onChange={this.selectedTime} />
                </label>
              </div>
              <button type='button' onClick={this.handleClick} disabled={this.state.disable}>Next</button>
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
