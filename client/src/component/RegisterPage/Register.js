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

const Register = () => {
  const classes = useStyles()
  return (
    <>
      <h3>SmartPulse Register</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <Input labelName="Username" /> <Input labelName="E-Mail" />
        <br></br>
        <Input labelName="Password" />
        <br></br>
        <Buttons name="Register"></Buttons>
      </form>
    </>
  )
}

export default Register
