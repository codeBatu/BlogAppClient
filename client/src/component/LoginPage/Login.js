import React, { useEffect, useState } from 'react'
import Input from '../Inputs/Input'
import Buttons from '../buttons/Buttons'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import { Button } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))
const Login = () => {
  let navigate = useNavigate()
  const classes = useStyles()
  const [email, setEmalil] = useState('')

  const [password, setPassword] = useState('')

  async function handleSubmit() {
    await AuthService.login(email, password)
    navigate('../success', { replace: true })
  }

  return (
    <>
      <h3>SmartPulse Login</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <Input labelName="Email" set={(e) => setEmalil(e.target.value)} />
        <br></br>
        <Input labelName="Password" set={(e) => setPassword(e.target.value)} />

        <br></br>
        <Button color="primary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </form>
    </>
  )
}

export default Login
