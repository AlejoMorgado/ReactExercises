import React from 'react'
import EmptyCart from './EmptyCart'
import '../../styles/CartCreator.css'

const CartCreator = ({cart, emptyCart}) => {
  return (
    <div >
      {cart.map((item, index) => (
        <div className='cartWrapper' key={index}>
          <p>{item.sneakerName}</p>
          <p>{item.price}</p>
          <img src={item.image}/>
        </div>
      ))}
      <EmptyCart emptyCart={emptyCart} />
    </div>
  )
}
export default CartCreator;