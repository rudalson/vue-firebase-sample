// Firebase App (the core Firebase SDK) is always required and must be listed first
import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'
import router from '../router'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// firebase.firestore().collection('test').add({ test: 'aaa' })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

Vue.prototype.$firebase = firebase
Vue.prototype.$isFirebaseAuth = false

firebase.auth().onAuthStateChanged((user) => {
  Vue.prototype.$isFirebaseAuth = true
  if (user) {
    router.push('/')
  } else {
    router.push('/sign')
  }

  store.dispatch('getUser', user)
})
