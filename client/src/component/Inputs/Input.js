import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const Input = (props) => {
  return (
    <TextField
      id="outlined-basic"
      onChange={props.set}
      label={props.labelName}
      variant="outlined"
    />
  )
}

export default Input
