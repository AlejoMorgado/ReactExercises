import React from 'react'

const Tittle = ({text, color}) => {

  return (
    <div id='titleContainer'>
      <h1 style={{color}}>{text}</h1>
    </div>
  )
}

export default Tittle