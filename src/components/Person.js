import React from 'react'
// import './person.css'

function Person({person, color1}) {
  // let colorDiana = person.name == "Diana" ? "diana" : "notDiana"
  let colorDiana;
  const inline = {
    color: color1
  }
  if(person.name == "Diana"){
    return (
      <h2 className="diana">Je suis {person.name}, j'ai {person.age} ans, et je connais {person.skill} </h2>
    )
  }
  else{
    return (
      <h2 className="notDiana" style={inline}>Je suis {person.name}, j'ai {person.age} ans, et je connais {person.skill} </h2>
    )
    
  }




}

export default Person