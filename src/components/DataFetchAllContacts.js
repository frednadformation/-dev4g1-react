import React, {useState, useEffect} from 'react'

import axios from 'axios';

function DataFetchAllContacts() {
    //Chargement et erreur
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [contacts, setContacts] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:5000/')
        .then((response) =>{
            setLoading(false)
            setContacts(response.data)
            setError('')
        })
        .catch((error) =>{
            setLoading(false)
            setContacts({})
            setError("error");
        })
    }, []);


  return (
    <div>
        {
            loading ? 'loading....' : contacts.map((contact, index) =>{
                return (
                <div key={index}>
                    nom : {contact.nom}
                    <br />
                    prenom : {contact.prenom}
                    <br />
                    email : {contact.email}
                </div>
                )

            })
        }
    </div>
  )
}

export default DataFetchAllContacts