import Auth from '../auth'
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = (email, password) => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await Auth.signIn(email, password)
      console.log(user)
      // Redirect to explore page
      navigate('/explore')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
      >
        Sign In
      </Button>
    </>
  )
}

export default Login
