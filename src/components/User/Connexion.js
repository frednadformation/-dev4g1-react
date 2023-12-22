import React from 'react'

function Connexion() {
  return (
    <div>

        <h1>Page de connexion</h1>
        <form action="http://localhost:5000/api/connexion" method="post">
            <label>Username</label>
            <input type="text" name="username" />
            <label>Password</label>
            <input type="password" name="password" />
    
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Connexion