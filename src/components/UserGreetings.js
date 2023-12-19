import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true,
         message: 'Welcome Guest !'
      }
    }

    seConnecter() {
      this.setState({
        message : "Welcome User !",
      })
    }

  render() {
    // return(
    //   <div>
    //       <h1>{this.state.message}</h1>
    //       <button onClick={()=>this.seConnecter()}>Se connecter</button>
    //   </div>
    // )
    //Ternaire
    // return this.state.isLoggedIn ? ( <div>Welcome Fréd !</div>) : ( <div>Welcome Guest !</div> )
    //Circuit court
    // return this.state.isLoggedIn && ( <div>Welcome Fréd !</div>)

    let message;
    if(this.state.isLoggedIn){
        
      message = <div>Welcome Fréd</div>
        
    }
    else{
        
      message = <div>Welcome Guest</div>
        
    }
    return <div>{message}</div>
    // if(this.state.isLoggedIn){
    //     return (
    //       <div>Welcome Fréd</div>
    //     )
    // }
    // else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
  }
}

export default UserGreetings