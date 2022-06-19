import React from 'react'
import Input from '../Inputs/Input'
import Buttons from '../buttons/Buttons'
import { makeStyles } from '@material-ui/core/styles'
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
  return (
    <>
      <h3>SmartPulse Login</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <Input labelName="Username" />
        <br></br>
        <Input labelName="Password" />

        <br></br>
        <Buttons color="primary" name="Login"></Buttons>
      </form>
    </>
  )
}

export default Login
