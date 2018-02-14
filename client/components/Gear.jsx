import React from 'react'

class Gear extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      none: null,
      kb: null,
      pullUp: null,
      sandbag: null,
      barbell: null,
      box: null

    }
    this.setGearList = this.setGearList.bind(this)
    this.makeList = this.makeList.bind(this)
  }
  setGearList (evt) {
    if (this.state.none === evt.target.value ||
        this.state.kb === evt.target.value ||
        this.state.pullUp === evt.target.value ||
        this.state.sandbag === evt.target.value ||
        this.state.barbell === evt.target.value ||
        this.state.box === evt.target.value) {
      this.setState({
        [evt.target.value]: null
      })
    } else {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }
  }

  makeList () {
    const gearList = Object.values(this.state).filter(equipment => {
      return equipment !== null
    })
    this.props.gear(gearList)
  }

  render () {
    return (
      <div className='container'>
        <div className="header">
          {/* <h1>{this.props.type}: {this.props.duration} min</h1> */}
          <h1>Select Equipment: </h1>
        </div>
        <div>
          <div className='flex-container'>
            <form className="general-form">
              <div className='form-body'>
                <label className='gear'>None
                <input className='general-input' type='checkbox' name='none' value='none' onChange={this.setGearList}/>
                </label>
                <label className='gear'>Kettle Bell/Dumbbell
                <input className='general-input' type='checkbox' name='kb' value='kb' onChange={this.setGearList}/>
                </label>
                <label className='gear'>Pull-Up Bar
                <input className='general-input' type='checkbox' name='pullUp' value='pull-up' onChange={this.setGearList}/>
                </label>
                <label className='gear'>Sandbag/Bucket
                <input className='general-input' type='checkbox' name='sandbag' value='sandbag' onChange={this.setGearList}/>
                </label>
                <label className='gear'>Barbell
                <input className='general-input' type='checkbox' name='barbell' value='barbell' onChange={this.setGearList}/>
                </label>
                <label className='gear'>Box
                <input className='general-input' type='checkbox' name='box' value='box' onChange={this.setGearList}/>
                </label>
              </div>
              {/* need to assing onClick=event handler to the button */}
              <button type='button' onClick={this.makeList}>Next</button>
              <button type='button' onClick={this.props.back}>Back</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Gear
