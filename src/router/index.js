import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterPage from '../components/RegisterPage.vue'
import HasilSearch from '../components/HasilSearch.vue'
import IsiCartPage from '../components/IsiCartPage.vue'
import CheckoutPage from '../components/CheckoutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registerpage',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/searchpage',
    name: 'HasilSearch',
    component: HasilSearch
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
