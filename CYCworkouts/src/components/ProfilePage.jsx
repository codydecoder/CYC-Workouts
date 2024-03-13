
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

const ProfilePage = ({ userData }) => {
  const [workoutPlans, setWorkoutPlans] = useState([])
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/${userData._id}/workoutPlans`)
        setWorkoutPlans(response.data)
      } catch (error) {
        console.error('Error fetching workout plans:', error.message)
      }
    }

    const fetchExercises = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/${userData._id}/exercises`)
        setExercises(response.data)
      } catch (error) {
        console.error('Error fetching exercises:', error.message)
      }
    }

    fetchWorkoutPlans()
    fetchExercises()
  }, [userData._id])

  /*useEffect(() => {
    setWorkoutPlans(userData.savedWorkoutPlans)
    setExercises(userData.savedExercises)
  }, [userData])*/

  console.log(userData)
  console.log(workoutPlans)
  console.log(exercises)
  
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <strong>Name:</strong>
        <span> {userData.username} </span>
      </div>

      <div className="workout-plans">
        <h3>Saved Workout Plans:</h3>
        <ul>
          {workoutPlans.map(workoutPlan => (
            <li key={workoutPlan._id}>{workoutPlan.workoutPlanName}</li>
          ))}
        </ul>
      </div>

      <div className="exercises">
        <h3>Saved Exercises:</h3>
        <ul>
          {exercises.map(exercise => (
            <li key={exercise._id}>{exercise.exerciseName}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProfilePage