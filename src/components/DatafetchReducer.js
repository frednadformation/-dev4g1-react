import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

function DatafetchReducer() {

    const initialState = {
        loading : true,
        error : '',

        posts: {}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return {
                    loading : false,
                    posts : action.payload,
                    error : ''
                }
            case 'FETCH_ERROR':
                return {
                    loading : false,
                    posts: {},
                    error: "Something went wrong"
                }
            default :
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data});
        })
        .catch( error =>{
            dispatch({type: 'FETCH_ERROR'});
        })
    },[])

  return (
    <div>
        {
            state.loading ? 'Loading...' : state.posts.map((post, index) =>{
                return (
                    <div key={index}>
                    titre du post : {post.title}
                    <br />
                    description : {post.body}
                    <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default DatafetchReducer