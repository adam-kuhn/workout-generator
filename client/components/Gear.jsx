import React from 'react'
import {connect} from 'react-redux'

import {setGear, toTime} from '../actions'

class Gear extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      none: '',
      kb: '',
      pullUp: '',
      sandbag: '',
      barbell: '',
      box: ''

    }
    this.setGearList = this.setGearList.bind(this)
    this.makeList = this.makeList.bind(this)
    this.backToTime = this.backToTime.bind(this)
  }
  setGearList (evt) {
    if (this.state.none === evt.target.value ||
        this.state.kb === evt.target.value ||
        this.state.pullUp === evt.target.value ||
        this.state.sandbag === evt.target.value ||
        this.state.barbell === evt.target.value ||
        this.state.box === evt.target.value) {
      this.setState({
        [evt.target.value]: ''
      })
    } else {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }
  }

  makeList () {
    const gearList = Object.values(this.state).filter(equipment => {
      return equipment !== ''
    })
    this.props.dispatch(setGear(gearList))
  }

  backToTime () {
    this.props.dispatch(toTime())
  }

  render () {
    return (
      <div className='form-container'>
        <div className="header">
          <h1>Select Equipment: </h1>
        </div>
        <div>
          <div className='flex-container'>
            <form className="general-form">
              <div className='form-body gear-form'>
                <label className='gear'>None
                  <input className='input-none' type='checkbox' name='none' value='none' onChange={this.setGearList}/>
                </label>
                <label className='gear'>Kettle Bell/Dumbbell
                  <input className='input-kb' type='checkbox' name='kb' value='kb/db' onChange={this.setGearList}/>
                </label>
                <label className='gear'>Pull-Up Bar
                  <input className='input-pullup' type='checkbox' name='pullUp' value='pull-up' onChange={this.setGearList}/>
                </label>
                <label className='gear'>Sandbag/Bucket
                  <input className='input-sandbag' type='checkbox' name='sandbag' value='sandbag' onChange={this.setGearList}/>
                </label>
                <label className='gear'>Barbell
                  <input className='input-barbell' type='checkbox' name='barbell' value='barbell' onChange={this.setGearList}/>
                </label>
                <label className='gear'>Box
                  <input className='input-box' type='checkbox' name='box' value='box' onChange={this.setGearList}/>
                </label>
              </div>
              <button type='button' onClick={this.makeList}>Next</button>
              <button type='button' onClick={this.backToTime}>Back</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default connect()(Gear)
