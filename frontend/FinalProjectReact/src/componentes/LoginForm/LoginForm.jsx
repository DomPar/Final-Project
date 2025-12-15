import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import {Card, CardHeader, TextField, CardContent, Divider, Button, CardActions} from '@mui/material'
import './LoginForm.css'
import { login } from '../../services/authService'
import FormControlLabel from '@mui/material/FormControlLabel';

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
    <Card id="login-card" sx={{ maxWidth: '500px' }}>
      <CardHeader
       id="text-login"
       sx={{
        display: 'flex!important',
        justifyContent: 'center!important',
        alignItems: 'center!important',
       }}
       avatar={<img
                src=".././images/LogoPetFriends.png" 
                alt="Logo" 
                style={{ 
                  width: '100px', 
                  height: '100px',
                  marginLeft: '136px',               
                }} />}
      />
      <CardContent>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{ 
            width: 400,
            marginBottom: '20px', 
            bgcolor: 'whitesmoke', 
            borderRadius: 6,
              '& .MuiOutlinedInput-root': {
              '& fieldset': {
            border: 'none' }}
              }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          label="Password"
          variant="outlined"
          fullWidth={true}
          sx={{ 
            width: 400,
            bgcolor: 'whitesmoke', 
            borderRadius: 6,
              '& .MuiOutlinedInput-root': {
              '& fieldset': {
            border: 'none' }}
              }}
        />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button sx={{ textTransform: 'none', bgcolor: '#87ab69', borderRadius: 20, color: 'white' }} onClick={onLogin} color="success">
            Log In
        </Button> 
      <Link to='/chooseuser'>
        <Button sx={{ textTransform: 'none' }}>Don't have an account? Sign Up </Button>
      </Link>
      </CardActions>
    </Card>
  )
}

export default LoginCard