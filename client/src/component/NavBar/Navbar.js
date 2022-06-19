import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../LoginPage/Login'
import Register from '../RegisterPage/Register'

export default function NavBar() {
  return (
    <Box style={{ textAlign: 'center' }}>
      <BrowserRouter>
        <AppBar position="static" variant="outlined">
          <Toolbar>
            <Typography>Blogs</Typography>
            <Button
              style={{ marginLeft: 'auto' }}
              color="inherit"
              href="/register"
            >
              Register
            </Button>
            <Button color="inherit" href="/login">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}
