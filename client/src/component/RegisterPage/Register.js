import React, { useState } from 'react'
import Input from '../Inputs/Input'
import Buttons from '../buttons/Buttons'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../services/auth.service'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const navigate = useNavigate()
  const classes = useStyles()
  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      await AuthService.signup(email, password, userName).then(
        (response) => {
          console.log('Sign up successfully', response)

          navigate('/Login')
          //  window.location.reload()
        },
        (error) => {
          console.log(error)
        }
      )
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <h3>SmartPulse Register</h3>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSignup}
      >
        <Input labelName="Username" set={(e) => setUserName(e.target.value)} />{' '}
        <Input labelName="E-Mail" set={(e) => setEmail(e.target.value)} />
        <br></br>
        <Input labelName="Password" set={(e) => setPassword(e.target.value)} />
        <br></br>
        <Buttons name="Register"></Buttons>
      </form>
    </>
  )
}

export default Register
