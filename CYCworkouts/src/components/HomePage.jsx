import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = ({ user }) => {
  const navigate = useNavigate()

  return (
    <div className="homepage-container">
      <h1 id='homepage-welcome'>Welcome {user.username}!</h1>
      {!user ? (
        <>
        </>
      ) : (
        <>
          <div className="user-info">
            <h2>User Information</h2>
            <p>Name: {user.username}</p>
            
          </div>
          <button onClick={() => navigate('/create-exercise')}>Create Exercises</button>
          <button onClick={() => navigate('/create-workoutPlan')}>Create Workout Plan</button>
        </>
      )}
    </div>
  )
}

export default Homepage