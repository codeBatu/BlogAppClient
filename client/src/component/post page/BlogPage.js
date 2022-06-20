import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import { computeHeadingLevel } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import PostService from '../../services/post.service'

const BlogPage = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [posts, setPosts] = useState([])

  PostService.getAllPrivatePosts().then(
    (response) => {
      console.log(response)
      setPosts(response.data)
    },
    (error) => {
      console.log(error)
    }
  )

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Box style={{ marginTop: '30px' }}></Box>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item key={index} xs={12} md={12}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  style={{
                    borderImageWidth: '200px',
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography>{post.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      handleClickOpen()
                    }}
                  >
                    ({post.createDateTime})
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{post.id}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>{post.id}</DialogContentText>

                      <>
                        <Card
                          sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <CardMedia
                            component="img"
                            style={{ width: '100', height: '100' }}
                            image="https://source.unsplash.com/random"
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {post.title}
                            </Typography>
                            <Typography>{post.description}</Typography>
                          </CardContent>
                        </Card>
                      </>
                    </DialogContent>
                  </Dialog>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}

export default BlogPage
