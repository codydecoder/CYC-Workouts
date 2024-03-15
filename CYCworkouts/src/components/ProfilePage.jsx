
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

const ProfilePage = ({ userData }) => {
  const [workoutPlans, setWorkoutPlans] = useState([])
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    setWorkoutPlans(userData.savedWorkoutPlans)
    setExercises(userData.savedExercises)
  }, [userData])

  console.log(userData)
  console.log(workoutPlans)
  console.log(exercises)
  
  return (
    <div className="profile-container">
      <h2 id='profile-title'>Profile</h2>
      <div className="profile-info">
        <strong id='profile-name'>Name:</strong>
        <span id='profile-name-details'> {userData.username} </span>
      </div>

      <div className="profile-workoutPlans">
        <h3>Saved Workout Plans:</h3>
        <div id='profile-workoutPlans-list'>
          {workoutPlans.map(workoutPlan => (
            <li key={workoutPlan._id}>{workoutPlan.workoutPlanName}</li>
          ))}
        </div>
      </div>

      <div className="profile-exercises">
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