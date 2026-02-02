import { useNavigate } from 'react-router-dom'
import './ChooseUser.css'

function ChooseUser() {
  const navigate = useNavigate()
 
  return (
    <div className="choose-user-card">
      <div className="choose-user-header">
        <img
          src=".././images/LogoPetFriends.png" 
          alt="Logo" 
          className="choose-user-logo"
        />
        <h2>¿Cómo quieres registrarte?</h2>
      </div>
      
      <div className="choose-user-content">
        <button 
          className="choose-btn user-btn"
          onClick={() => navigate('/signup')}
        >
          <div className="btn-icon">👤</div>
          <div className="btn-text">
            <h3>Usuario</h3>
            <p>Encuentra tu compañero perfecto</p>
          </div>
        </button>

        <div className="divider">
          <span>o</span>
        </div>

        <button 
          className="choose-btn shelter-btn"
          onClick={() => navigate('/signups')}
        >
          <div className="btn-icon">🏠</div>
          <div className="btn-text">
            <h3>Refugio</h3>
            <p>Ayuda a encontrar hogares</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ChooseUser
