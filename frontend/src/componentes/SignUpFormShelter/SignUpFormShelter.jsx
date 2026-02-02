import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUpFormShelter.css'
import { signupShelter } from '../../services/authService'

function SignUpSCard() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordR, setPasswordR] = useState('')
  const [shelterName, setShelterName] = useState('')
  const [cif, setCif] = useState('')
  const [tlf, setTlf] = useState('')
  const [terms, setTerms] = useState(false)
  const [age, setAge] = useState(false)

  const [error, setError] = useState('')

  const onSignUp = async () => {
    setError('')

    if (!shelterName || !email || !password || !passwordR || !cif || !tlf) {
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
      const {result} = await signupShelter({shelterName, email, password, cif, tlf})
      localStorage.setItem('token', result.token)
      localStorage.setItem('id', result.id)
      localStorage.setItem('email', email)
      localStorage.setItem('role', result.role)
      navigate(`/app/shelterownprofile/${result.id}`)
    } catch (err) {
      setError('Error al registrarse. Intenta de nuevo.')
    }
  }
 
  return (
    <div className="signup-card">
      <div className="signup-header">
        <img
          src=".././images/LogoPetFriends.png" 
          alt="Logo" 
          className="signup-logo"
        />
        <h2 className="signup-title">Registro de Refugio</h2>
      </div>
      
      <div className="signup-content">
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label className="form-label">Nombre del Refugio</label>
          <input
            type="text"
            className="form-input"
            placeholder="Ej: Refugio Esperanza"
            onChange={(e) => setShelterName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="refugio@ejemplo.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-input"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Repetir Contraseña</label>
          <input
            type="password"
            className="form-input"
            placeholder="••••••••"
            onChange={(e) => setPasswordR(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">CIF</label>
          <input
            type="text"
            className="form-input"
            placeholder="A12345678"
            onChange={(e) => setCif(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-input"
            placeholder="612345678"
            onChange={(e) => setTlf(e.target.value)}
          />
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              className="checkbox-input"
              onChange={(e) => setTerms(e.target.checked)}
            />
            <span>Acepto los <a href="#">términos y condiciones</a></span>
          </label>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              className="checkbox-input"
              onChange={(e) => setAge(e.target.checked)}
            />
            <span>Soy mayor de 18 años</span>
          </label>
        </div>
      </div>

      <div className="signup-actions">
        <button 
          className="btn btn-primary"
          onClick={onSignUp}
        >
          Registrarse
        </button>
      </div>
    </div>
  )
}

export default SignUpSCard
