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
const Login = () => {
  const classes = useStyles()
  const [email, setEmalil] = useState('')
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  async function handleSubmit() {
    try {
      await AuthService.login(email, password).then(
        (response) => {
          console.log(response)
          navigate('/')
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
      <h3>SmartPulse Login</h3>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Input labelName="Email" set={(e) => setEmalil(e.target.value)} />
        <br></br>
        <Input labelName="Password" set={(e) => setPassword(e.target.value)} />

        <br></br>
        <Buttons color="primary" name="Login"></Buttons>
      </form>
    </>
  )
}

export default Login
