// import React from 'react'

// function PropChild(props) {
//     console.log(props)
//   return (
//     <div>
//         <h2> Hello {props.name} Welcome to our organisation and your ID is {props.ID}.</h2>
//         {props.children}
//     </div>
//   )
// }

// export default PropChild


import React, { Component } from 'react'

class PropChild extends Component {
  
  render() {
    return (
      <div>
           <h2> Hello {this.props.name} Welcome to our organisation and your ID is {this.props.ID}.</h2>
           {props.children}
      </div>
    )
  }
}
export default PropChild
