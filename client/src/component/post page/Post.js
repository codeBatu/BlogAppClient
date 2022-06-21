import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PostService from '../../services/post.service'

const Post = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    PostService.getlastFivePost().then(
      (response) => {
        console.log('first')
        setPosts(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  return (
    <main>
      {/* Hero unit */}
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}

export default Post
