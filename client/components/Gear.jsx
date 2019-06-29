import React from 'react'
import {connect} from 'react-redux'

import {saveGearSelectionShowWorkout} from '../actions/selection'
import {toTime} from '../actions/back'

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
    this.saveGearSelectionShowWorkoutList = this.saveGearSelectionShowWorkoutList.bind(this)
    this.makeList = this.makeList.bind(this)
    this.backToTime = this.backToTime.bind(this)
  }
  saveGearSelectionShowWorkoutList (evt) {
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
    this.props.dispatch(saveGearSelectionShowWorkout(gearList))
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
                {this.props.gear.map(item => {
                  return (
                    <label key={item.id} className='gear'>{item.text}
                      <input className={`input-${item.name}`}
                        type='checkbox' name={item.name} value=
                          {item.value} onChange={this.saveGearSelectionShowWorkoutList} />
                    </label>
                  )
                }
                )}
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

function mapStateToProps (state) {
  return {
    gear: state.gear.list
  }
}
export default connect(mapStateToProps)(Gear)
