import React, {useEffect, useState} from 'react'

import "./DataFetchTodos.css"

import axios from 'axios'

function DataFetchTodos() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    //données :
    const [todos, setTodos] = useState({});

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response =>{
            setLoading(false)
            setTodos(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setTodos({})
            setError(error.message)
        })
    }, []);

  return (
    <React.Fragment>
        {
            loading ? 'Loading...' : todos.map((todo, index)=>{
                return (
                    <div className={todo.completed ? 'green' : 'red'} key={index}>
                        titre : {todo.title}
                        <br />
                        user ID : {todo.userId}
                        <br />
                        état : {todo.completed ? 'Complété' : 'Non complété'}
                        <hr />
                    </div>
                )
            })
        }
    </React.Fragment>
  )
}

export default DataFetchTodos