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

const login = async (username, password) => {
  var response = await axios.post(API_URL + '/Login', {
    username,
    password,
  })
  if (response.status === 200) {
    localStorage.setItem('user', JSON.stringify(response.data))

    return response.data
  }
}
const getUserDeatils = async (id) => {
  var user = JSON.parse(localStorage.getItem('user'))
  var b = await axios.get(API_URL + '/GetById?id=' + user.result.id)
  console.log(b)
  return await axios.get(API_URL + '/GetById?id=' + user.result.id)
}

const updateUser = async (userName, email, password) => {
  var user = JSON.parse(localStorage.getItem('user'))
  return await axios.put(API_URL + '/updateUser?id=' + user.result.id, {
    userName,
    email,
    password,
  })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  //console.log(JSON.parse(localStorage.getItem('user')))
  console.log('---------------')
  var b = JSON.parse(localStorage.getItem('user'))

  return JSON.parse(localStorage.getItem('user'))
}

const authService = {
  updateUser,
  getUserDeatils,
  signup,
  login,
  logout,
  getCurrentUser,
}

export default authService
