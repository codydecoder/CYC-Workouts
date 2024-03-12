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
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login Now</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => navigate('/create-account')}>Create Account</button>
    </div>
  )
}

export default LoginPage