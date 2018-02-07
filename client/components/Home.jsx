import React from 'react'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div className='container'>
        <div className="header">
          <h1>Select Your Style: </h1>
        </div>
        <div>
          <div className='flex-container'>
            <form className="home-form">
              <div className='form-body'>
                <label>Running
                  <input className='run-input' type='radio' name='type' value='0' />
                </label>
                <label>Strength
                  <input className='strength-input' type='radio' name='type' value='1' />
                </label>
                <label>OCR
                  <input className='ocr-input' type='radio' name='type' value='2' />
                </label>
              </div>
              {/* need to assing onClick=event handler to the button */}
              <button type='button'>Next</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
