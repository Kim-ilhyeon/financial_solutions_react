import React from 'react'
import './ProfileCard.css'

const ProfileCard = (datas) => {
  return (
    <div>
        <ul>
            {datas.map((data) => (
                <li>{data.name}</li>
                <li>{data.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default ProfileCard