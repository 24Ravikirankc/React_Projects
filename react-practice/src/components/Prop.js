import React from 'react'

const Prop = (props) => {
    console.log(props)
  return (
    <div>
      <h2>Hello {props.name}</h2>
    </div>
  )
}

export default Prop
