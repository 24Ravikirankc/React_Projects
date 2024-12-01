import React, { Component } from 'react'

export default class ClassComp extends Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Class components are ES6 classes that extend from React.Component.</p>
        <p> This inheritance allows the class to access React's built-in methods and properties, enabling the creation of complex components that can manage their own state and respond to lifecycle events.</p>
      </div>
    )
  }
}
