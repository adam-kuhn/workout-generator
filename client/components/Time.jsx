import React from 'react'

class Time extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
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
                <input className='general-input' type='radio' name='time' value='0-20' />
                </label>
                <label>20-40 min
                <input className='general-input' type='radio' name='time' value='20-40' />
                </label>
                <label>40-60 min
                <input className='general-input' type='radio' name='time' value='40-60' />
                </label>
                <label>>60 min
                <input className='general-input' type='radio' name='time' value='>60' />
                </label>
              </div>
              {/* need to assing onClick=event handler to the button */}
              <button type='button'>Next</button>
              <button type='button' onClick={this.props.back}>Back</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Time
