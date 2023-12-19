import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Bouton click");
    }

render() {
    return (
      <div>ClassClick
      
      <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default ClassClick