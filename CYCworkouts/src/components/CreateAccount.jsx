import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateAccount = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    await onSubmit({ username })
    navigate('/login') // back to the login page after account creation
  }

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount