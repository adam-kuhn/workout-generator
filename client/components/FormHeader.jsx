import React from 'react'

const FormHeader = (props) => {
  return (
    <div>
      <h1>{props.type}: {props.duration}</h1>
      {props.gear.map(item => {
        return (
          <span key={item}>{item} </span>
        )
      })}
    </div>
  )
}

export default FormHeader
