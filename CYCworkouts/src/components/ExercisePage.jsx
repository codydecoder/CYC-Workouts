import React, { useState } from 'react'

const Exercise = ({ onExerciseSubmit }) => {
  const [exercise, setExercise] = useState({
    name: '',
    targetGroup: '',
    reps: '',
    weight: '',
    instructions: '',
    visual: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercise(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onExerciseSubmit(exercise)
    // Reset the form after submission
    setExercise({ name: '', targetGroup: '', reps: '', weight: '', instructions: '', visual: '' })
  }

  return (
    <div>
      <h2>Create New Exercise</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Exercise Name"
          value={exercise.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="targetGroup"
          placeholder="Target Muscle Group"
          value={exercise.targetGroup}
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
          type="url"
          name="visual"
          placeholder="Visual URL"
          value={exercise.visual}
          onChange={handleChange}
        />
        <button type="submit">Submit Exercise</button>
      </form>
    </div>
  )
}

export default Exercise