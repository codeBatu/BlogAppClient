import * as React from 'react'

import {
  Container,
  Typography,
  Toolbar,
  AppBar,
  Box,
  IconButton,
  Menu,
  Button,
} from '@material-ui/core'

const NavBar = () => {
  return (
    <AppBar position="static" variant="outlined">
      <Toolbar>
        <Typography>HELLO</Typography>
        <Button style={{ marginLeft: 'auto' }} color="inherit">
          Register
        </Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
