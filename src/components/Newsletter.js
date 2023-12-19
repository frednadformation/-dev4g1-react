import React, { Component } from 'react'
import "./newsletter.css";

export class Newsletter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         nom : '',
         prenom : '',
         email: '',
         pseudo: ''
      }
    }

    handleNomChange = event =>{
        this.setState({nom : event.target.value})
    }
    handlePrenomChange = event =>{
        this.setState({prenom : event.target.value})
    }
    handlePseudoChange = event =>{

        if(event.target.value.length == 0){
            event.target.className = "black"
        }
        else if(event.target.value.length < 3){
            event.target.className = "red"
        }
        else{
            event.target.className = "green"
        }
        this.setState({pseudo : event.target.value})
    }
    handleEmailChange = event =>{
        this.setState({email : event.target.value})
    }
    handleSubmit = event =>{
        alert(`Merci ${this.state.nom} ${this.state.prenom},
        d'avoir pris contact avec nous. Nous reviendrons vers 
        vous a cette email : ${this.state.email}`)
        event.preventDefault();
    }

  
  render() {
    const {nom, prenom, email, pseudo} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
				<div>
					<label>Nom </label>
					<input
						type="text"
						value={nom}
                        onChange={this.handleNomChange}
                        className='input1'
					/>
				</div>
				<div>
					<label>Prenom</label>
					<input
						type="text"
						value={prenom}
                        onChange={this.handlePrenomChange}
                        className='input1'
					/>
				</div>
				<div>
					<label>Pseudo</label>
					<input
						type="text"
						value={pseudo}
                        onChange={this.handlePseudoChange}
                        className='input1'
					/>
				</div>
				<div>
					<label>email</label>
					<input
						type="email"
						value={email}
                        onChange={this.handleEmailChange}
                        className='input1'
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
      </div>
    )
  }
}

export default Newsletter