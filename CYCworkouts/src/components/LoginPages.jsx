import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(username)
    navigate('/') // Navigate to the homepage after login
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
        <button type="submit">Login Now</button>
      </form>
      <button onClick={() => navigate('/create-account')}>Create Account</button>
    </div>
  )
}

export default LoginPage