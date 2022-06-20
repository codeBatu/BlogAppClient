import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../LoginPage/Login'
import Register from '../RegisterPage/Register'
import HomePage from '../Page/HomePage'
import { useEffect, useState } from 'react'
import AuthService from '../../services/auth.service'
import DashPage from '../DashBoard/DashPage'

export default function NavBar() {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
    }
  }, [])

  const logOut = () => {
    AuthService.logout()
  }
  return (
    <>
      <Box style={{ textAlign: 'center' }}>
        <BrowserRouter>
          <AppBar position="static" variant="outlined">
            <Toolbar>
              {currentUser ? (
                <>
                  <Button color="inherit" href="/">
                    Blogs
                  </Button>
                  <Button
                    color="inherit"
                    href="/dashboard"
                    style={{ marginLeft: 'auto' }}
                  >
                    Add Post
                  </Button>
                  <Button color="inherit" href="/dashboard">
                    Dashboard
                  </Button>
                  <Button color="inherit" href="/login" onClick={logOut}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button color="inherit" href="/">
                    Blogs
                  </Button>
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
                </>
              )}
            </Toolbar>
          </AppBar>
          <Routes>
            <Route exac path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  )
}
