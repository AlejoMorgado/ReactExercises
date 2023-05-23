import React from 'react'
import '../../styles/inputs.css'
const LoginUser = ({content}) => {
  return (
    <div className='boxes'>
      <label htmlFor="username">Username:</label>
      <input className='input' type="text" id="username" name="username" required placeholder={content}/>
    </div>
  )
}
export default LoginUser;