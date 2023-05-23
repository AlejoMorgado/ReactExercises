import React from 'react'
import '../../styles/ShoppingCartButton.css'
import image from '../images/pngwing.com (3).png'
const ButtonShoppingCart = ({onButtonClick}) => {
  return (
    <div >
      <button className='CartButton' onClick={onButtonClick}><img className='cart' src={image}></img></button>
    </div>
  );
}

export default ButtonShoppingCart