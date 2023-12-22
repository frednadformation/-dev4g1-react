import axios from 'axios';
import React, { useEffect, useState } from 'react'

function OneContact() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //La donnée :
    const [contact, setContact] = useState({});

    useEffect (() =>{
        axios.get('http://localhost:5000/contact/658025c667360f597f3d5491')
        .then(response =>{
            setLoading(false)
            setContact(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setContact({})
            setError('Something went wrong')
        })
    }, [])
  return (
    <div>        
    
    <h1>title : {loading ? 'loading...........' : contact.nom}</h1>
    <p>body : {loading ? 'loading...........' : contact.prenom}</p>

    {error ? error : null}</div>
  )
}

export default OneContact