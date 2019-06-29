import React from 'react'
import {connect} from 'react-redux'

const FormHeader = (props) => {
  const {wodType, duration, gear} = props
  return (
    <div>
      <h1>{wodType}: {duration}</h1>
      {gear.map(selectedItem => (
        <span key={selectedItem}>{selectedItem} </span>
      )
      )}
    </div>
  )
}

const mapStateToProps = (state) => state.selection

export default connect(mapStateToProps)(FormHeader)
