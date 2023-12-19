import React, {useState, useEffect} from 'react'

import axios from 'axios'

function DataFetchFilm() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    //Data : film
    const [film, setFilm] = useState({});
    //Bonus :
    const [filmName, setFilmName] = useState('')

    const handleFilmNameChange = event =>{
        setFilmName(event.target.value)
    }
    useEffect(()=>{
        // axios.get('http://www.omdbapi.com/?t='+filmName+'&apikey=18aa403a')
        axios.get(`http://www.omdbapi.com/?t=${filmName}&apikey=18aa403a`)
        .then((response)=>{
            setLoading(false);
            setFilm(response.data)
            setError('');
        })
        .catch((error)=>{
            setLoading(false);
            setFilm({})
            setError('Something went wrong')
        });
    })

  return (
    <React.Fragment>
    <form>
        <label>Nom du film</label>
        <input type='text' onChange={handleFilmNameChange}/>
    </form>
        <h1>{loading ? 'loading...' : film.Title}</h1>
        <img src={film.Poster} alt='Poster'/>
        <p>{film.Year}</p>
        <p>{film.BoxOffice}</p> 
    </React.Fragment>
  )
}

export default DataFetchFilm