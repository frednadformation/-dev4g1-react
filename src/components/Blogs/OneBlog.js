import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import EditBlog from './EditBlog';


function OneBlog() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [blog, setBlog] = useState({});

  //Valeurs edit :
  const [sujet, setSujet] = useState("");

  const sujetHandler = event => {
    setSujet(event.target.value);
  };

  const params = useParams();

  useEffect(()=>{
    // axios.get('http://localhost:5000/blog/' + params.id)
    axios.get(`http://localhost:5000/blog/${params.id}`)
    .then(response =>{
      setLoading(false)
      console.log(response.data);
      setBlog(response.data)
      setSujet(response.data.titre)
      setError('')
    })
    .catch(err =>{
      setLoading(false)
      setBlog({})
      setError(err.message)
    })
  }, [])



  return (
    <div>
      <h1>{loading ? 'Loading ...' : blog.titre}</h1>
      <h1>{loading ? 'Loading ...' : blog.sousTitre}</h1>
      <p>{loading ? 'Loading ...' : blog.description}</p>
      <p>{loading ? 'Loading ...' : blog.auteur}</p>

      <EditBlog blogId={params.id} data={blog}/>
      
     {/* <form action={`http://localhost:5000/editblog/${params.id}?_method=PUT`} method="post">
        <input type="hidden" name="_method" value="PUT" />
        <label>Sujet</label>
        <input type="text" name="titre" value={sujet} onChange={sujetHandler}/>
        <br/>
        <label>Sous titre</label>
        <input type="text" name="sousTitre" defaultValue={blog.sousTitre} />
        <br/>
        <label>Auteur</label>
        <input type="text" name="auteur" defaultValue={blog.auteur}/>
        <br/>
        <label>Description</label>
        <textarea name="description" id="" cols="30" rows="10" defaultValue= {blog.description}>
        </textarea>
        <br/>
        <input type="submit" value="update post" />
    </form>

    <form action={`http://localhost:5000/deleteblog/${params.id}?_method=DELETE`} method="post">
        <input type="hidden" name="_method" value="DELETE" />

        <input type="submit" value="DELETE post" />
    </form> */}



    </div>
  )
}

export default OneBlog