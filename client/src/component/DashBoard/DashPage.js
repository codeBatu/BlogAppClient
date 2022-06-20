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

import PostService from '../../services/post.service'

async function removeBlog(id) {
  await PostService.removePostBlog(id)
}
const handleUpdateBlog = async (id, title, description) => {
  await PostService.updatePostBlog(id, title, description)
}
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  TextField: {
    marginBottom: theme.spacing(2),
  },
}))

const DashPage = () => {
  const [title, setTitle] = useState('')

  const [updateTitle, setUpdateTitle] = useState('')
  const [updateDescription, setUpdateDescription] = useState('')
  const [description, setDescription] = useState('')
  function updateBlog(id, title, description) {
    return (
      <>
        <Dialog open={true}>
          <DialogTitle>Update Blog</DialogTitle>
          <DialogContent>
            <DialogContentText>Update Blog</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => handleUpdateBlog(id, title, description)}
              color="primary"
            >
              Update
            </Button>
            <Button onClick={() => setOpen(false)} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
  const handleSignup = async (e) => {
    e.preventDefault()

    await PostService.createPostBlog(title, description, true)
  }
  const [posts, setPosts] = useState([])

  PostService.getAllPrivatePosts().then(
    (response) => {
      setPosts(response.data)
    },
    (error) => {
      console.log(error)
    }
  )

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {' '}
      <Button
        color="primary"
        style={{
          backgroundColor: 'lightgray',

          marginLeft: '1900px',
        }}
        onClick={handleClickOpen}
      >
        Add Post
      </Button>{' '}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Yeni Yazi</DialogTitle>
        <DialogContent>
          <DialogContentText>Formu Doldurunuz</DialogContentText>
          <div>
            <form onSubmit={handleSignup}>
              <TextField
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                type="text"
                multiline="true"
                placeholder="Content"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <DialogActions>
                <Button color="inherit" type="submit">
                  Yayınla
                </Button>
              </DialogActions>
            </form>
          </div>
        </DialogContent>
      </Dialog>
      <TableContainer component={Paper} variant="elevation" textAlign="center">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead textAlign="center">
            <TableRow>
              <TableCell align="center">PostId</TableCell>
              <TableCell align="center">UserId</TableCell>
              <TableCell align="center">Title</TableCell>

              <TableCell align="center">description</TableCell>
              <TableCell align="center">createDateTime</TableCell>
              <TableCell align="center">lastUpdate</TableCell>

              <TableCell align="center">status</TableCell>
              <TableCell align="center">Crud</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post, index) => (
              <TableRow key={index}>
                <TableCell align="center" component="th" scope="row">
                  {post.id}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {post.userId}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {post.title}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {post.description}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {post.createDateTime}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {post.lastUpdate}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {post.status ? 'Aktif' : 'Pasif'}
                </TableCell>

                <TableCell align="center">
                  <Button
                    color="primary"
                    onClick={handleClickOpen}
                    type="submit"
                  >
                    Düzenle{post.id}
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
                            value={updateTitle}
                            onChange={(e) => setUpdateTitle(e.target.value)}
                          />
                          <TextField
                            type="text"
                            multiline="true"
                            placeholder="Content"
                            value={updateDescription}
                            onChange={(e) =>
                              setUpdateDescription(e.target.value)
                            }
                          />
                          <DialogActions>
                            {' '}
                            <Switch>Aktif</Switch>{' '}
                            <Button
                              color="inherit"
                              type="submit"
                              onClick={() =>
                                updateBlog(
                                  post.id,
                                  updateTitle,
                                  updateDescription
                                )
                              }
                            >
                              Yayinla
                            </Button>
                          </DialogActions>
                        </form>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    color="secondary"
                    onClick={() => {
                      removeBlog(post.id)
                    }}
                  >
                    Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={posts.length}
      />
    </>
  )
}

export default DashPage
