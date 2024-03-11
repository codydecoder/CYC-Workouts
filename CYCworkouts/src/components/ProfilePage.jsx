import React from 'react'

const ProfilePage = ({ userData }) => {

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <strong>Name:</strong>
        <span>{userData.name}</span>
      </div>
    </div>
  )
}

export default ProfilePage