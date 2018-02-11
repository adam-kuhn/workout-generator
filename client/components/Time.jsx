import React from 'react'

class Time extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      duration: ''
    }
    this.setTime = this.setTime.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  setTime (evt) {
    this.setState({
      duration: evt.target.value
    })
  }

  handleClick () {
    this.props.time(this.state.duration)
  }

  render () {
    return (
      <div className='container'>
        <div className="header">
          <h1>Select Duration: </h1>
        </div>
        <div>
          <div className='flex-container'>
            <form className="general-form">
              <div className='form-body'>
                <label>0-20 min
                <input className='general-input' type='radio' name='time' value='0-20'
                  checked={this.state.duration === '0-20'} onChange={this.setTime} />
                </label>
                <label>20-40 min
                <input className='general-input' type='radio' name='time' value='20-40'
                  checked={this.state.duration === '20-40'} onChange={this.setTime} />
                </label>
                <label>40-60 min
                <input className='general-input' type='radio' name='time' value='40-60'
                  checked={this.state.duration === '40-60'} onChange={this.setTime}/>
                </label>
                <label>>60 min
                <input className='general-input' type='radio' name='time' value='>60'
                  checked={this.state.duration === '>60'} onChange={this.setTime} />
                </label>
              </div>
              {/* need to assing onClick=event handler to the button */}
              <button type='button' onClick={this.handleClick}>Next</button>
              <button type='button' onClick={this.props.back}>Back</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Time
