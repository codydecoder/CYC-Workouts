import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user }) => {
    return (
        <header className='header-container'>
            <div className='header-title'>C Y C Workouts</div>
            <nav className='header-list'>
                <Link className='header-links' to="/">Home</Link>
                <Link className='header-links' to="/profile">Profile</Link>
                <Link className='header-links' to="/workoutPlans">Workout Plans</Link>
                <Link className='header-links' to="/exercises">Exercises</Link>
            </nav>
        </header>
    )
}

export default Header 