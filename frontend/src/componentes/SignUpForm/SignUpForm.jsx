import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUpForm.css'
import { signup } from '../../services/authService'

function SignUpCard() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [passwordR, setPasswordR] = useState('')
  const [userName, setUsername] = useState('')
  const [terms, setTerms] = useState(false)
  const [age, setAge] = useState(false)
  const [error, setError] = useState('')

  const onSignUp = async () => {
    setError('')

    if (!name || !userName || !email || !password || !passwordR) {
      setError('Por favor, rellena todos los campos')
      return
    }

    if (password !== passwordR) {
      setError('Las contraseñas no coinciden')
      return
    }

    if (!terms) {
      setError('Debes aceptar los términos y condiciones')
      return
    }

    if (!age) {
      setError('Debes ser mayor de 18 años')
      return
    }

    try {
      const { result } = await signup({name, userName, email, password})
      localStorage.setItem('token', result.token)
      localStorage.setItem('email', email)
      localStorage.setItem('id', result.id)
      localStorage.setItem('role', result.role)
      navigate('/app')
    } catch (err) {
      setError('Error al registrarse. Intenta de nuevo.')
    }
  }

  const handleTerms = (e) => {
    setTerms(e.target.checked)
  }

  const handleAge = (e) => {
    setAge(e.target.checked)
  }
 
  return (
    <div className="signup-card">
      <div className="signup-header">
        <img
          src=".././images/LogoPetFriends.png" 
          alt="Logo PetFriends" 
          className="signup-logo"
        />
        <h2 className="signup-title">Join PetFriends!</h2>
      </div>
      
      <div className="signup-content">
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Your full name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            id="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            placeholder="Choose a username"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Create a password"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password-repeat" className="form-label">Repeat Password</label>
          <input
            id="password-repeat"
            type="password"
            onChange={(e) => setPasswordR(e.target.value)}
            className="form-input"
            placeholder="Confirm your password"
          />
        </div>
        
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              onChange={handleTerms}
              className="checkbox-input"
            />
            <span>I agree to the <a href="#" className="link-text">Terms and Conditions</a></span>
          </label>
        </div>
        
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              onChange={handleAge}
              className="checkbox-input"
            />
            <span>I am over 18 years old</span>
          </label>
        </div>
      </div>
      
      <div className="signup-actions">
        <button className="btn btn-primary" onClick={onSignUp}>
          Register
        </button>
      </div>
    </div>
  )
}

export default SignUpCard
