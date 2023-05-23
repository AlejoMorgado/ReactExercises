import React from 'react'
import '../../styles/ShoppingCartButton.css'
const EmptyCart = ({ emptyCart }) => {
  return (
    <div >
      <button onClick={emptyCart}>Empty Cart</button>
    </div>
  )
}

export default EmptyCart