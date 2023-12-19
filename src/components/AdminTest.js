import React, { Component } from 'react'

export class AdminTest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         admin : false
      }
    }

    adminLogged(){
        this.setState({admin: true})
    }

  render() {
    return this.state.admin ? <button>Edit</button> 
        : 
        <div>
            <p>Veuillez vous connecter en tant qu'admin</p>
            <button onClick={()=>this.adminLogged()}>Se connecter</button>
        </div>

  }
}

export default AdminTest