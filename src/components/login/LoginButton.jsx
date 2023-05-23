import React from 'react'
import image from '../images/pngwing.com.png'
import '../../styles/LoginButton.css'
const Login = ({onButtonClick}) => {
  return (
    <div >
        <button className='LoginButton' onClick={onButtonClick}><img className='icon' src={image}></img></button>
    </div>
  )
}

export default Login