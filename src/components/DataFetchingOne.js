import React, {useState, useEffect} from 'react'

import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //La donnée :
    const [post, setPost] = useState({});

    useEffect (() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })
    }, [])
  return (
    <div>
        <h1>title : {loading ? 'loading...........' : post.title}</h1>
        <p>body : {loading ? 'loading...........' : post.body}</p>

        {error ? error : null}

    </div>
  )
}

export default DataFetchingOne