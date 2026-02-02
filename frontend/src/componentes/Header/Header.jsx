import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getOwnUser } from '../../services/userService';
import { getOwnShelter } from '../../services/shelterService';

// SVG Icons Components
const MenuIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const LogoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const Header = ({setter, isShelter}) => {
  const [toggle, setToggle] = useState(false)
  const [user, setUser] = useState({})
  const [shelter, setShelter] = useState({})
  const [avatar, setAvatar] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      if (localStorage.getItem('role') === 'user') {
        const {result} = await getOwnUser(localStorage.getItem('email'))
        setUser(result)
      }
      if (localStorage.getItem('role') === 'manager') {
        const {result} = await getOwnShelter(localStorage.getItem('id'))
        setShelter(result)
      }
      }
      getProfile()
  }, []);

  useEffect(() => {
    if (localStorage.getItem('role') === 'user') {
      setAvatar(user.avatar)
    }
    if (localStorage.getItem('role') === 'manager') {
      setAvatar(shelter.avatar)
    }
  }, [user, shelter]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }
  
  const handleClick = () => {
    if (toggle === false) {
      setter('visible')
      setToggle(!toggle)
    } else {
      setter('hidden')
      setToggle(!toggle)
    }
  }

  const handleProfile = () => {
    if (localStorage.getItem('role') === 'user') {
      navigate('/app/ownprofile')
    }
    if (localStorage.getItem('role') === 'manager') {
      navigate(`/app/shelterownprofile/${localStorage.getItem('id')}`)
    }
  }
  
  let URL = ""
  const handleHome = () => {
    if (localStorage.getItem('role') === 'user') {
      URL ='/app'
    }
    if (localStorage.getItem('role') === 'manager') {
      URL = `/app/shelterownprofile/${localStorage.getItem('id')}`
    }
  }
  handleHome()

  return (
    <div id='header-container'>
      {!isShelter && (
        <div id="sidebar-button-container">
          <button id="sidebar-button" onClick={handleClick} aria-label="Toggle menu">
            <MenuIcon />
          </button>
        </div>
      )}

      <div id="header-logo-container">
        <Link to={URL}>
          <div id="header-logo"></div>
        </Link>
      </div>   

      <div id="header-titulo"></div>
      
      <div id="link-profile">
        <button 
          id='profile-button' 
          style={{backgroundImage:`url(${avatar})`}} 
          onClick={handleProfile}
          aria-label="View profile"
        >
        </button>
      </div>
      
      <div id="logout-button-container">
        <button id="logout-button" onClick={handleLogout} aria-label="Logout">
          <LogoutIcon />
        </button>
      </div>
    </div>
  )
}

export default Header
