import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        }
// this is third approch
      //  this.clickHandler = this.clickHandler.bind(this)
    }

    // hide this when you are going to do the finall approch
    // clickHandler(){
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    //     console.log(this)
    // }


    // below is the final approch 
    clickHandler = () => {
        this.setState({
            message:'Good Bye !'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* // 1st approch is add bind(this) */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* This is seconf approch and arrow method <button onClick={() => this.clickHandler()}>Click</button> */}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind

// 1st approch is add bind(this)
