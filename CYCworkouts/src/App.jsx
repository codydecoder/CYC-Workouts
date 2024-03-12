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
import { BASE_URL } from './global'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = async (username) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${username}`)
      console.log(response)
      const userData = response.data
      setUser(userData)
    } catch (error) {
      console.error('Error fetching user data:', error.message)
    }
  }

  const handleLogout = () => {
    setUser(null)
  }

  const isAuthenticated = !!user

  return (
    <Router>
      <Header /> 
      <Routes>
      <Route path="/" element={isAuthenticated ? <Homepage user={user} onLogout={handleLogout} /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/create-account" element={<CreateAccount onSubmit={() => {}} />} />
          <Route path="/profile" element={isAuthenticated ? <ProfilePage userData={user} /> : null} />
          <Route path="/create-exercise" element={isAuthenticated ? <ExerciseForm onExerciseSubmit={() => {}} /> : null} />
          <Route path="/create-workoutPlan" element={isAuthenticated ? <WorkoutPlanForm onCreatePlan={() => {}} /> : null} />
          <Route path="/exercises" element={<ExerciseList/>}/>
          <Route path="/workoutPlans" element={<WorkoutPlanList/>}/>
        </Routes>
    </Router>
  )
}

export default App
