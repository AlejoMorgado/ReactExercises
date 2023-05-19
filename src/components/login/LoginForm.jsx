import React from 'react'
import LoginUser from './LoginUser'
import LoginPassword from './LoginPassword'
import Number from './Number'

const LoginForm = () => {
  return (
    <div>
      <form>
        <LoginUser />
        <LoginPassword />
        <Number />
      </form>

    </div>
  )
}

export default LoginForm