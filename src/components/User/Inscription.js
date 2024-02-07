import React, { useState } from 'react'

function Inscription() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleChange(e){
    setPassword(e.target.value)
    
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/

    const isValidPassword = regExp.test(password)

    if(isValidPassword) {
      setMessage("password is valid")
    }
    else{
      setMessage("Invalid password")
    }
  }

  return (
    <div>
        <h1>Page inscription</h1>

        <form action="http://localhost:5000/api/inscription" method="post">
            <label>Username</label>
            <input type="text" name="username" />
            <br/>
            <label>Email</label>
            <input type="email" name="email" />
            <br/>
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange}/>
            <p>{message}</p>
            <br/>
            Type d'utilisateur :
            <label for="administrateur">Admin</label>
            <input type="radio" name="admin" id="administrateur" value="true" />
            <label for="user">Utilisateur classique</label>
            <input type="radio" name="admin" id="user" value="false" />
            <br/>
            <input type="submit" value="Nouveau utilisateur" />
        </form>

    </div>
  )
}

export default Inscription