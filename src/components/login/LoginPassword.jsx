import React from 'react'
import '../../styles/inputs.css'
const LoginPassword = () => {
  return (
    <div className='boxes'>
      <label htmlFor="password">Password:</label>
      <input className='input' type="text" id="password" name="password" required/>
    </div>
  )
}

export default LoginPassword