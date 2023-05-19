import React from 'react'
import image from '../images/nb.jpg'
import '../img.css'
import '../../styles/card.css'
const NewBalance = ({sneakerName, price}) => {
  return (
    <div className='cardWrapper'>
      <h2>{sneakerName}</h2>
      <p>Price: {price}</p>
      <img src={image}/>
    </div>
  )
}

export default NewBalance