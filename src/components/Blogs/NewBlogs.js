import React from 'react'

function NewBlogs() {
  return (
    <div>
        <form action="http://localhost:5000/addblog" method="post">
            <label for="">Sujet</label>
            <input type="text" name="titre" />
            <br/>
            <label for="">Sous titre</label>
            <input type="text" name="sousTitre" />
            <br/>
            <label for="">Auteur</label>
            <input type="text" name="auteur"/>
            <br/>
            <label for="">Description</label>
            <textarea name="description" id="" cols="30" rows="10">

            </textarea>
            <br/>
            <input type="submit" value="nouveau post" />
        </form>

    </div>
  )
}

export default NewBlogs