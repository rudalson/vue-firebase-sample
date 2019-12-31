import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const levelCheck = (to, from, next) => {
  if (store.state.claims === undefined) {
    next('/userProfile')
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: levelCheck
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/userProfile',
    component: () => import('../views/userProfile.vue')
  },
  {
    path: '/sign',
    component: () => import('../views/sign.vue')
  },
  {
    path: '/lectures/card',
    component: () => import('../views/lectures/card.vue')
  },
  {
    path: '/lectures/layout',
    component: () => import('../views/lectures/layout.vue')
  },
  {
    path: '/lectures/axios',
    component: () => import('../views/lectures/axios.vue')
  },
  {
    path: '/lectures/mother',
    component: () => import('../views/lectures/mother')
  },
  {
    path: '/lectures/vuex',
    component: () => import('../views/lectures/vuex')
  },
  {
    path: '/lectures/notes',
    component: () => import('../views/lectures/notes.vue')
  },
  {
    path: '*',
    component: () => import('../views/e404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const waitFirebase = () => {
  return new Promise((resolve, reject) => {
    let cnt = 0
    const tmr = setInterval(() => {
      if (store.state.firebaseLoaded) {
        clearInterval(tmr)
        resolve()
      } else if (cnt++ > 200) {
        clearInterval(tmr)
        reject(Error('파이어베이스 로드가 안되었습니다.'))
      }
    }, 10)
    resolve()
  })
}

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
  // if (store.state.firebaseLoaded) {
  //   next()
  // }
  waitFirebase()
    .then(() => next())
    .catch(e => Vue.prototype.$toasted.global.error(e.message))
})

router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
})

export default router
