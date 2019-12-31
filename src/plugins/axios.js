import Vue from 'vue'
import axios from 'axios'
import store from '../store'

const firebaseAPI = axios.create({
  baseURL: 'http://localhost:5000/vue-tutorial-memi/us-central1/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})

// Add a request interceptor
firebaseAPI.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.authorization = store.state.token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

Vue.prototype.$axios = firebaseAPI
