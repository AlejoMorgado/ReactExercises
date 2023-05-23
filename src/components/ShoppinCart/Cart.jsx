import React from 'react'
import CartCreator from './CartCreator'
import HideCartButton from './HideCartButton'

const Cart = ({cart, hideCart, emptyCart}) => {
  return (
    <div>
    <HideCartButton onButtonClick={hideCart} content="Menu" />
      <h1>Welcome to your shopping cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <CartCreator emptyCart={emptyCart}  cart={cart}/>
      )
      }
    </div>
  )
}
export default Cart