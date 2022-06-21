import React, { useEffect, useState } from 'react'
import {
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  makeStyles,
  Switch,
} from '@material-ui/core'
import AuthService from '../../services/auth.service'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  TextField: {
    marginBottom: theme.spacing(2),
  },
}))
const handleUpdateBlog = async (userName, email, password) => {
  await AuthService.updateUser(userName, email, password)
}
const Profile = () => {
  const [userName, setUserName] = useState('')

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const [posts, setPosts] = useState([])
  useEffect(() => {
    AuthService.getUserDeatils().then(
      (response) => {
        console.log(response)
        setPosts(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <TableContainer component={Paper} variant="elevation" textAlign="center">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead textAlign="center">
            <TableRow>
              <TableCell align="center">UserName</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Sifre</TableCell>
              <TableCell align="center">Düzenle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                {posts.userName}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {posts.email}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {posts.password}
              </TableCell>
              <TableCell align="center">
                <Button color="primary" onClick={handleClickOpen}>
                  Düzenle
                </Button>
                <Dialog
                  open={open}
                  onClose={() => {
                    handleClose()
                  }}
                >
                  <DialogTitle>Yeni Yazi</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Formu Doldurunuz</DialogContentText>
                    <div>
                      <form>
                        <TextField
                          type="text"
                          placeholder="Title"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                          type="text"
                          multiline="true"
                          placeholder="Content"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                          type="text"
                          multiline="true"
                          placeholder="Content"
                          value={pwd}
                          onChange={(e) => setPwd(e.target.value)}
                        />
                        <DialogActions>
                          {' '}
                          <Switch>Aktif</Switch>{' '}
                          <Button
                            color="inherit"
                            type="submit"
                            onClick={() => {
                              handleUpdateBlog(userName, email, pwd)
                            }}
                          >
                            Yayinla
                          </Button>
                        </DialogActions>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Profile
