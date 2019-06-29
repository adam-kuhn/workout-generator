import React from 'react'
import {connect} from 'react-redux'

import {saveGearSelectionShowWorkout, goBackToTime} from '../actions/appNavigation'

export const hasItemBeenChecked = (selectedItem, allGear) => {
  const currentGearSelection = Object.values(allGear)
  const itemsThatAreChecked = currentGearSelection.filter(item => item === selectedItem)
  return itemsThatAreChecked.length
}

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
    this.updateSelectedGear = this.updateSelectedGear.bind(this)
    this.makeList = this.makeList.bind(this)
    this.backgoBackToTime = this.backgoBackToTime.bind(this)
  }
  updateSelectedGear (evt) {
    const {value, name} = evt.target
    if (hasItemBeenChecked(value, this.state)) {
      this.setState({
        [value]: ''
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  makeList () {
    const gearList = Object.values(this.state).filter(equipment => {
      return equipment !== ''
    })
    this.props.dispatch(saveGearSelectionShowWorkout(gearList))
  }

  backgoBackToTime () {
    this.props.dispatch(goBackToTime())
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
                          {item.value} onChange={this.updateSelectedGear} />
                    </label>
                  )
                }
                )}
              </div>
              <button type='button' onClick={this.makeList}>Next</button>
              <button type='button' onClick={this.backgoBackToTime}>Back</button>
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
