import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user }) => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/workoutPlans">Workout Plans</Link></li>
                    <li><Link to="/exercises">Exercises</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header 