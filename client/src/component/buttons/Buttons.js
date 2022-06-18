import React from 'react'
import Button from '@material-ui/core/Button'

const Buttons = (props) => {
  return (
    <Button variant="contained" color={props.color}>
      {props.name}
    </Button>
  )
}

export default Buttons
