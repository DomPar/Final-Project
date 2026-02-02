import { Link, useNavigate } from 'react-router-dom'
import './Sidebar.css'
import { useState } from 'react'

const Sidebar = ({sidebarDisplay}) => {
const navigate = useNavigate()
  return (
    <div id='sidebar-container' className={sidebarDisplay}>
        <div className="sidebar-item" onClick={()=>{navigate('/app/')}}>
          <button id='home-button'></button>
          <span className="sidebar-label">Home</span>
        </div>
        
        <div className="sidebar-item" onClick={()=>{navigate('/app/ownprofile')}}>
          <button id='profile-button'></button>
          <span className="sidebar-label">Profile</span>
        </div>
        
        <div className="sidebar-item" onClick={()=>{navigate('/app/listofshelters')}}>
          <button id='shelters-button'></button>
          <span className="sidebar-label">Shelters</span>
        </div>
        
        <div className="sidebar-item" onClick={()=>{navigate('/app/aboutus')}}>
          <button id='about-us-button'></button>
          <span className="sidebar-label">About</span>
        </div>
    </div>
  )
}

export default Sidebar
