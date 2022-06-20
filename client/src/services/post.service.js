import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://localhost:5001'

const getlastFivePost = async () => {
  return await axios.get(API_URL + '/blog/GetLastFiveBlog')
}

const createPostBlog = async (title, description) => {
  return await axios.post(
    API_URL + '/blog/CreateBlog',
    {
      title,
      description,
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
const updatePostBlog = async (id, title, description) => {
  console.log(API_URL + '/blog/UpdateeBlog?id=' + id)
  return await axios.put(
    API_URL + '/blog/UpdateeBlog?id=' + id,
    {
      title,
      description,
    },
    {
      headers: authHeader(),
    }
  )
}
const getBlogById = async (id) => {
  return await axios.post(API_URL + '/blog/GetById?id=' + id, {
    headers: authHeader(),
  })
}
const removePostBlog = async (id) => {
  return await axios.delete(API_URL + '/blog/RemoveBlog?id=' + id, {
    headers: authHeader(),
  })
}

const getAllPrivatePosts = async () => {
  return await axios.get(API_URL + '/blog/GetAllBlog', {
    headers: authHeader(),
  })
}
const postService = {
  getlastFivePost,
  inActiveBlog,
  getBlogById,
  activeBlog,
  updatePostBlog,
  removePostBlog,
  createPostBlog,

  getAllPrivatePosts,
}

export default postService
