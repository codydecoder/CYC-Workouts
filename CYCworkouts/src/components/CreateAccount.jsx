import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateAccount = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`${BASE_URL}/users`, { username })
      navigate('/login') // Navigate back to the login page after account creation
    } catch (error) {
      console.error('Error creating account:', error.message)
    }
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