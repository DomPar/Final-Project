import { Link, useNavigate } from 'react-router-dom'
import './Sidebar.css'
import { useState } from 'react'

const Sidebar = ({sidebarDisplay}) => {
const navigate = useNavigate()
  return (
    <div id='sidebar-container' className={sidebarDisplay}>
        <div className="sidebar-item" onClick={()=>{navigate('/app/')}}>
          <button id='home-button'></button>
          <span className="sidebar-label">Inicio</span>
        </div>
        
        <div className="sidebar-item" onClick={()=>{navigate('/app/ownprofile')}}>
          <button id='profile-button'></button>
          <span className="sidebar-label">Perfil</span>
        </div>
        
        <div className="sidebar-item" onClick={()=>{navigate('/app/listofshelters')}}>
          <button id='shelters-button'></button>
          <span className="sidebar-label">Refugios</span>
        </div>
        
        <div className="sidebar-item" onClick={()=>{navigate('/app/aboutus')}}>
          <button id='about-us-button'></button>
          <span className="sidebar-label">Sobre nosotros</span>
        </div>
    </div>
  )
}

export default Sidebar
