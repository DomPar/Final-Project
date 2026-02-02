import './App.css'
import { Outlet } from 'react-router-dom'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import { useState, useEffect } from 'react'

function App() {
  const [sidebarDisplay, setSidebarDisplay] = useState('hidden')
  const [isShelter, setIsShelter] = useState(false)

  useEffect(() => {
    const role = localStorage.getItem('role')
    setIsShelter(role === 'manager')
  }, [])

  return (
    <>
      <Header setter={setSidebarDisplay} isShelter={isShelter}/>
      <div id="main-container">
        {!isShelter && (
          <div id="sidebar-grid">
            <Sidebar sidebarDisplay={sidebarDisplay}/>
          </div>
        )}
        <div id="outlet-grid">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
