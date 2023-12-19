import React from "react";

function SuperHeros(props) {
    return (
        <div>
            <h1>Hello {props.nom} a.k.a {props.surnom}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default SuperHeros