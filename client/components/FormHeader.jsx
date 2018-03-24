import React from 'react'
import {connect} from 'react-redux'

class FormHeader extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.selection.wodType}: {this.props.selection.duration}</h1>
        {this.props.selection.gear.map(item => {
          return (
            <span key={item}>{item} </span>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    selection: state.selection
  }
}

export default connect(mapStateToProps)(FormHeader)
