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
            <form className="general-form">
              <div className='form-body'>
                <label className='gear'>None
                  <input className='general-input' type='checkbox' name='gear' value='0' />
                </label>
                <label className='gear'>Kettle Bell/Dumbbell
                  <input className='general-input' type='checkbox' name='gear' value='1' />
                </label>
                <label className='gear'>Pull-Up Bar
                  <input className='general-input' type='checkbox' name='gear' value='3' />
                </label>
                <label className='gear'>Sandbag/Bucket
                  <input className='general-input' type='checkbox' name='gear' value='4' />
                </label>
                <label className='gear'>Barbell
                  <input className='general-input' type='checkbox' name='gear' value='4' />
                </label>
                <label className='gear'>Box
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
