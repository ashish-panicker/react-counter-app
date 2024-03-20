import { useDispatch } from 'react-redux'
import React from 'react'
import { login } from './store/slices/authSlice'

const Login = () => {
  const dispatch = useDispatch()

  const [loginForm, setLoginForm] = React.useState({
    userName: '',
    password: '',
  })

  const onLogin = (e) => {
    e.preventDefault()
    dispatch(login(loginForm))
  }

  const onInputChange = (e) => {
    const { name, value } = e.target
    setLoginForm(prevData => ({ ...prevData, [name]: value })  ) 
  }

  return (
    <div>
      <form onSubmit={onLogin}>
        <h2>Login</h2>
        <div>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userNamer"
            placeholder="Your username"
            value={loginForm.userName}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            value={loginForm.password}
            onChange={onInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
