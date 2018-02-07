import React from 'react'

class Gear extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className='container'>
        <div className="header">
          <h1>Select Equipment: </h1>
        </div>
        <div>
          <div className='flex-container'>
            <form className="home-form">
              <div className='form-body'>
                <label>None
                  <input className='general-input' type='checkbox' name='gear' value='0' />
                </label>
                <label>Kettle Bell/Dumbbell
                  <input className='general-input' type='checkbox' name='gear' value='1' />
                </label>
                <label>Pull-Up Bar
                  <input className='general-input' type='checkbox' name='gear' value='3' />
                </label>
                <label>Sandbag/Bucket
                  <input className='general-input' type='checkbox' name='gear' value='4' />
                </label>
                <label>Barbell
                  <input className='general-input' type='checkbox' name='gear' value='4' />
                </label>
                <label>Box
                  <input className='general-input' type='checkbox' name='gear' value='4' />
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
export default Gear
