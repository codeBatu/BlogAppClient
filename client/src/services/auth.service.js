import axios from 'axios'

const API_URL = 'https://localhost:5001/user'
//webpack
//webconfig
const signup = (username, password, email) => {
  return axios
    .post(API_URL + '/Register', { email, username, password })
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data.token))

      return response.data
    })
}

const login = (username, password) => {
  return axios
    .post(API_URL + '/Login', {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data))

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  //console.log(JSON.parse(localStorage.getItem('user')))
  console.log('---------------')
  console.log(localStorage)
  return JSON.parse(localStorage.getItem('user'))
}

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
}

export default authService
