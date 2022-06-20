import { useEffect, useState } from 'react'
import './App.css'
import Login from './component/LoginPage/Login'
import Navbar from './component/NavBar/Navbar'
import Register from './component/RegisterPage/Register'
import AuthService from './services/auth.service'

function App() {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
    }
  }, [])

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
