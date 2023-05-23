import React from 'react'
import image from '../images/airmax.jpg'
import '../../styles/img.css'
import '../../styles/card.css'
import AddToCart from '../Buttons/AddToCart'

const Nike = ({sneakerName, price, onAddToCart}) => {
  return (
    <div className='cardWrapper'>
      <h2>{sneakerName}</h2>
      <p>Price: {price}</p>
      <img src={image}/>
      <AddToCart onAddToCart={onAddToCart} content="Add to cart" />
    </div>
  )
}

export default Nike 