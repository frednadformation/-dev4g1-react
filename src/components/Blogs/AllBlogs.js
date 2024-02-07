import React, { useEffect, useReducer } from 'react'


import { Link } from 'react-router-dom'

import axios from 'axios'

import moment from 'moment'

import 'moment/locale/fr'

import { Button, Icon } from 'semantic-ui-react'

// import { Button } from '../Button.style'

function AllBlogs() {

    moment().local('fr')

    const initialState = {
        loading: true,
        error: '',
        blogs: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS': return {
                loading: false,
                error: '',
                blogs: action.payload
            }
            case 'FETCH_ERROR': return {
                loading: false,
                error: 'Something went wrong',
                blogs: {}
            }
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        // axios.get("http://localhost:5000/allblogs")
        //Grace au proxy :
        axios.get("/allblogs")
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' });
            })
    }, []);


    return (
        <div>
            {
                state.loading ? 'Loading...' : state.blogs.map((blog, index) => {
                    return (


                        <div key={index}>
                            {blog.imageName && <img src={`http://localhost:5000/${blog.imageName}`} style={{ "width": "50%" }} />}

                            <h1>{blog.titre}</h1>
                            <p>{blog.auteur}</p>
                            <p>{moment(blog.datePublication).format('L')}</p>

                            <Link to={`/oneblog/${blog._id}`}>
                                <Button animated>
                                    <Button.Content visible>En savoir plus</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                            </Link>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllBlogs