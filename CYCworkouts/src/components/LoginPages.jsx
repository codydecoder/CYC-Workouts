import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(username, password)
    navigate('/') // Navigate to the homepage after login
  }

  const handleLogout = () => {
    onLogout()
    navigate('/login') // Navigate back to the login page after logout
  }

  return (
    <div className="login-container">
      <div id='login-title'>Login Page</div>
      <form id='login-form' onSubmit={handleSubmit}>
        <input
          id='username-input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          id='password-input'
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button id='login-button' type="submit">Login Now</button>
      </form>
      <button id='logout-button' onClick={handleLogout}>Logout</button>
      <button id='createAccount-button' onClick={() => navigate('/create-account')}>Create Account</button>
    </div>
  )
}

export default LoginPage