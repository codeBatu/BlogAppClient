import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://localhost:5001'

const getAllPublicPosts = async () => {
  return await axios.get(API_URL + '/blog/GetLastFiveBlog')
}
const getAllPublicPost = async () => {
  return await axios.get(API_URL + '/blog/GetLastFiveBlog')
}
const createPostBlog = async (title, description, data) => {
  return await axios.post(
    API_URL + '/blog/CreateBlog',
    {
      title,
      description,
      data,
    },
    {
      headers: authHeader(),
    }
  )
}
const activeBlog = async () => {
  return await axios.post(API_URL + '/blog/activeBlog')
}
const inActiveBlog = async () => {
  return await axios.post(API_URL + '/blog//blog/inactiveBlog')
}
const updatePostBlog = async (id) => {
  return await axios.post(API_URL + '/blog/UpdateBlog?id=' + id, {
    headers: authHeader(),
  })
}
const removePostBlog = async (id) => {
  return await axios.post(API_URL + '/blog/RemoveBlog?id=' + id, {
    headers: authHeader(),
  })
}
const getAllPrivatePosts = async () => {
  return await axios.get(API_URL + '/blog/GetAll', {
    headers: authHeader(),
  })
}
const postService = {
  inActiveBlog,
  activeBlog,
  updatePostBlog,
  removePostBlog,
  createPostBlog,
  getAllPublicPosts,
  getAllPublicPost,
  getAllPrivatePosts,
}

export default postService
