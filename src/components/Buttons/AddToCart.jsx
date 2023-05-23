import React from 'react'
import image from '../images/add-to.cart.png'
import '../../styles/AddToCart.css'

const AddToCart = ({onAddToCart, content}) => {
  return (
    <button className='AddButton' onClick={onAddToCart}><img className='add' src={image}></img></button>
  )
}

export default AddToCart