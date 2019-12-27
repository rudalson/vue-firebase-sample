import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log('bf enter')
      next()
    }
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

router.beforeEach((to, from, next) => {
  console.log('before each')
  if (Vue.prototype.$isFirebaseAuth) {
    next()
  }
})

export default router
