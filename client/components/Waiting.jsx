import React from 'react'
import {connect} from 'react-redux'

import getWorkouts from '../actions'

class Waiting extends React.Component {
  componentDidMount () {
    this.props.dispatch(getWorkouts(this.props.selection))
  }
  render () {
    return (
      <h1>Im waiting</h1>
    )
  }
}

function mapStateToProps (state) {
  return {
    selection: state.selection
  }
}

export default connect(mapStateToProps)(Waiting)
