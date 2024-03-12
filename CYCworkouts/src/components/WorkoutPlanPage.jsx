
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

const WorkoutPlan = ({ onCreatePlan }) => {
  const [workoutName, setWorkoutName] = useState('')
  const [exercises, setExercises] = useState([])
  const [selectedExercises, setSelectedExercises] = useState([])
  const [selectedExerciseNames, setSelectedExerciseNames] = useState([])

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/exercises`)
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
      setSelectedExerciseNames([])
    } catch (error) {
      console.error('Failed to create workout plan:', error)
    }
  }

  const handleExerciseSelect = (e) => {
    const selectedIds = Array.from(e.target.selectedOptions, option => option.value)
    setSelectedExercises(selectedIds)
    const selectedNames = exercises.filter(exercise => selectedIds.includes(exercise._id)).map(exercise => exercise.exerciseName)
    setSelectedExerciseNames(selectedNames)
  }

  const addToWorkoutPlan = (exerciseId) => {
    setSelectedExercises([...selectedExercises, exerciseId])
    const selectedName = exercises.find(exercise => exercise._id === exerciseId).exerciseName
    setSelectedExerciseNames([...selectedExerciseNames, selectedName])
  }

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
        <label>Select Exercises:</label>
        <select multiple value={selectedExercises} onChange={handleExerciseSelect}>
          {exercises.map((exercise) => (
            <option key={exercise._id} value={exercise._id}>{exercise.exerciseName}</option>
          ))}
        </select>
        {selectedExerciseNames.length > 0 && (
          <div>
            <p>Selected Exercises:</p>
            <ul>
              {selectedExerciseNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        )}
        <button type="submit">Create Plan</button>
      </form>
      
      <div>
        <h3>Exercise List</h3>
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise._id}>
            {exercise.exerciseName}
            <button onClick={() => addToWorkoutPlan(exercise._id)}>Add to workout plan</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WorkoutPlan