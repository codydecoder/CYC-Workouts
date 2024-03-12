import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

const Exercise = ({ onExerciseSubmit }) => {
  const [exercise, setExercise] = useState({
    name: '',
    targetGroup: '',
    reps: '',
    sets: '',
    weight: '',
    instructions: '',
    visual: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercise(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${BASE_URL}/exercises`)
      console.log('Exercise submitted successfully')
      setExercise({ name: '', targetGroup: '', reps: '', sets: '', weight: '', instructions: '', visual: '' })
    } catch (error) {
      console.error('Failed to submit exercise:', error)
    }
  }
  return (
    <div>
      <h2>Create New Exercise</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Exercise Name"
          value={exercise.exerciseName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="targetGroup"
          placeholder="Target Muscle Group"
          value={exercise.musclesTargeted}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="reps"
          placeholder="Reps"
          value={exercise.reps}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="sets"
          placeholder="Sets"
          value={exercise.sets}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          value={exercise.weight}
          onChange={handleChange}
          required
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={exercise.instructions}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="visual"
          placeholder="Visual URL"
          value={exercise.videoLink}
          onChange={handleChange}
        />
        <button type="submit">Submit Exercise</button>
      </form>
    </div>
  )
}
export default Exercise