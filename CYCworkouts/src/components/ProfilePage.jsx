
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProfilePage = ({ userData }) => {
  const [workoutPlans, setWorkoutPlans] = useState([])
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      const response = await axios.get(`${BASE_URL}/workoutPlans/${userData._id}`)
      setWorkoutPlans(response.data)
    }

    const fetchExercises = async () => {
      const response = await axios.get(`${BASE_URL}/exercises/${userData._id}`)
      setExercises(response.data)
    }

    fetchWorkoutPlans()
    fetchExercises()
  }, [userData._id])

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <strong>Name:</strong>
        <span>{userData.name}</span>
      </div>

      <div className="workout-plans">
        <h3>Saved Workout Plans:</h3>
        <ul>
          {workoutPlans.map(plan => (
            <li key={plan._id}>{plan.name}</li>
          ))}
        </ul>
      </div>

      <div className="exercises">
        <h3>Saved Exercises:</h3>
        <ul>
          {exercises.map(exercise => (
            <li key={exercise._id}>{exercise.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProfilePage