import axios from 'axios'

export default {
  // Gets all the tables
  getTables: function () {
    return axios.get('/api/tables')
  },
  // Gets the waitlist
  getWaitlist: function () {
    return axios.get('/api/waitlist')
  },
  userSignUp: function (Users) {
  return axios.post('/api/authRoutes/signup', Users)
  },
  userLogin: function (Users) {
  return axios.post('/api/authRoutes/login', Users)
  },
  userProducts: function () {
    return axios.get('/api/products/')
  },
  logout: function () {
    return axios.get('/api/authRoutes/logout')
  }
}