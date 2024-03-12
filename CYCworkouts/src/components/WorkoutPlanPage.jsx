import React, { useState, useEffect } from 'react'
import axios from 'axios' // Add the axios import here
import { BASE_URL } from '../global'

const WorkoutPlan = ({ onCreatePlan }) => {
  const [workoutName, setWorkoutName] = useState('')
  const [exercises, setExercises] = useState([])
  const [selectedExercises, setSelectedExercises] = useState([])

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/workoutPlans`)
        const data = response.data
        setExercises(data)
      } catch (error) {
        console.error("Failed to fetch exercises:", error)
      }
    };

    fetchExercises()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${BASE_URL}/workoutPlans`, { workoutPlanName: workoutName, exerciseList: selectedExercises, description: 'Workout Description' })
      console.log('Workout plan created successfully:', response.data)
      onCreatePlan({ name: workoutName, exercises: selectedExercises })
      setWorkoutName('')
      setSelectedExercises([])
    } catch (error) {
      console.error('Failed to create workout plan:', error)
    }
  };

  return (
    <div>
      <h2>Create Workout Plan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Workout Name"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          required
        />
        <button type="submit">Create Plan</button>
      </form>
    </div>
  )
}

export default WorkoutPlan