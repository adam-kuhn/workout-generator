import React from 'react'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <div className="header">
          <h1>Select Your Style: </h1>
        </div>
        <div className="body">
          <form>
            <label>Running 
              <input type='radio' name='type' value='0' />
            </label>
            <label>Strength 
              <input type='radio' name='type' value='1' />
            </label>
            <label>OCR (Obstacle Course Racing) 
              <input type='radio' name='type' value='2' />
            </label>
            {/* need to assing onClick=event handler to the button */}
            <button type='button'>Next</button>

          </form>
        </div>
      </div>
   )
  }
}

export default Home