import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import './LoginForm.css'
import { login } from '../../services/authService'

function LoginCard() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = async () => {
    const { result } = await login({email, password})
    localStorage.setItem('token', result.token)
    localStorage.setItem('email', email)
    localStorage.setItem('role', result.role)
    localStorage.setItem('id', result.id)

    if (result.role === 'user'){
      navigate('/app')
    } else {
      navigate(`/app/shelterownprofile/${result.id}`)
    }
  }
 
  return (
    <div className="login-card">
      <div className="login-header">
        <img
          src=".././images/LogoPetFriends.png" 
          alt="Logo PetFriends" 
          className="login-logo"
        />
        <h2 className="login-title">Bienvenidos PetFriends</h2>
      </div>
      
      <div className="login-content">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Introduce tu email"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Introduce tu contraseña"
          />
        </div>
      </div>
      
      <div className="login-actions">
        <button className="btn btn-primary" onClick={onLogin}>
          Acceder
        </button>
        
        <div className="signup-link">
          <span>¿No tienes cuenta? </span>
          <Link to='/chooseuser' className="link-text">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginCard
