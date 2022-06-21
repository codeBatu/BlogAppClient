import * as React from 'react'
import { Button } from '@mui/material'
import { Menu } from '@mui/material'
import { MenuItem } from '@mui/material'
export default function DropDownButton() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        color="inherit"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Settings
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Button
          style={{ marginLeft: 'auto' }}
          color="inherit"
          href="/dashboard"
        >
          Dashboard
        </Button>
        <br></br>
        <Button color="inherit" href="/profile">
          Profile
        </Button>
      </Menu>
    </div>
  )
}
