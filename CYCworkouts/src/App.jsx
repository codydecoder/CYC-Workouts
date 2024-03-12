import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './components/LoginPages'
import CreateAccount from './components/CreateAccount'
import ProfilePage from './components/ProfilePage'
import Homepage from './components/HomePage'
import ExerciseForm from './components/ExercisePage'
import WorkoutPlanForm from './components/WorkoutPlanPage'
import ExerciseList from './components/lists/ExerciseList'
import WorkoutPlanList from './components/lists/WorkoutPlanList'
import './App.css'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (username) => {
    setUser({ name: username })
  }

  const isAuthenticated = !!user

  return (
    <Router>
      <Header /> 
      <Routes>
      <Route path="/" element={isAuthenticated ? <Homepage user={user} /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/create-account" element={<CreateAccount onSubmit={() => {}} />} />
          <Route path="/profile" element={isAuthenticated ? <ProfilePage userData={user} /> : null} />
          <Route path="/create-exercise" element={isAuthenticated ? <ExerciseForm onExerciseSubmit={() => {}} /> : null} />
          <Route path="/create-workout-plan" element={isAuthenticated ? <WorkoutPlanForm onCreatePlan={() => {}} /> : null} />
          <Route path="/exercises" element={<ExerciseList/>}/>
          <Route path="/workoutPlans" element={<WorkoutPlanList/>}/>
        </Routes>
    </Router>
  )
}

export default App
