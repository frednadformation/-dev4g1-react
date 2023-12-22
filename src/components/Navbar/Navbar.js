import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [jwt, setJwt] = useState(null)

  useEffect(()=>{
    axios.get('http://localhost:5000/getjwt', {withCredentials: true})
    .then(response =>{
      console.log(response.data);
      setJwt(response.data)
    })
    .catch(error =>{
      console.log(error.message);
    })
  },[])

  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        {
          jwt ? <Link to="http://localhost:5000/logout">Se deconnecter</Link> 
                :
                <Link to="/connexion">Se connecter</Link>
        }
    </nav>
  )
}

export default Navbar