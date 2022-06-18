import React from 'react'
import Button from '@material-ui/core/Button'

const Buttons = (props) => {
  return (
    <Button variant="contained" color={props.color}>
      Login
    </Button>
  )
}

export default Buttons
