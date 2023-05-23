import React from 'react'
import '../../styles/inputs.css'
const Number = () => {
  return (
    <div className='boxes'>
    <label htmlFor="number">Phone Number:</label>
    <input className='input' type="number" id="number" name="number" required/>
    </div>
  )
}

export default Number