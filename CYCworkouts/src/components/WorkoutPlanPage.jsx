import React, { useState, useEffect } from 'react'

const WorkoutPlan = ({ onCreatePlan }) => {
  const [workoutName, setWorkoutName] = useState('')
  const [exercises, setExercises] = useState([])
  const [selectedExercises, setSelectedExercises] = useState([])

  // useEffect(() => {
  //   const fetchExercises = async () => {
  //     try {
  //       const response = await fetch()//put actual url
  //       const data = await response.json()
  //       setExercises(data)
  //     } catch (error) {
  //       console.error("Failed to fetch exercises:", error)
  //     }
  //   }

  //   fetchExercises()
  // }, [])

  const handleExerciseSelection = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value)
    setSelectedExercises(selected)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreatePlan({ name: workoutName, exercises: selectedExercises })
    setWorkoutName('')
    setSelectedExercises([])
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
        
        <button type="submit">Create Plan</button>
      </form>
    </div>
  )
}

export default WorkoutPlan