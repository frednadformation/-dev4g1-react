import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("bouton click");
    }

  return (
    <div>
    FunctionClick
        <button type="button" onClick={clickHandler}>Click me !</button>
    </div>
  )
}

export default FunctionClick