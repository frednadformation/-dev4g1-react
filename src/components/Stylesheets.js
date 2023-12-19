import React from 'react'
import './stylesheets.css'

function Stylesheets(props) {
    let couleur = props.primary ? 'primary' : '';

  return (
    // <div className='primary'>Stylesheets</div>
    <div className={couleur}>Stylesheets</div>
  )
}

export default Stylesheets