import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'page1',
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page1.vue')
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: () => import(/* webpackChunkName: "about" */ '../views/Timeline.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
