import React from 'react'
import '../../styles/form.css'
import LoginUser from './LoginUser'
import LoginPassword from './LoginPassword'
import Number from './Number'
import RightSideForm from './RightSideForm'

const LoginForm = () => {
  return (
    <div className='formContainer'>
      <form id='form' action='/submit-form'>
        <LoginUser content="Username" />
        <LoginPassword />
        <Number />
        <input className='submitButton' type='submit' value='Login' />
      </form>
      <div class="rightSide">
        <div class="backgroundTint">
            <RightSideForm />
        </div>
      </div>

    </div>

  )
}

export default LoginForm