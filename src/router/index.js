import Vue from 'vue'
import Router from 'vue-router'

// Views
import HomeView from '@/views/Home/Home'
import DetailView from '@/views/Details/DetailView'
import Faqs from '@/views/FAQ/Faqs'
import SnacksView from '@/views/Products/SnacksView'
import Barberia from '@/views/Products/Barberia'
import Refacciones from '@/views/Products/Refacciones'
import Register from '@/views/Login/Register'
import Login from '@/views/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/detail/:details',
      name: 'DetailView',
      component: DetailView
    },
    {
      path: '/FAQ',
      name: 'Faqs',
      component: Faqs
    },
    {
      path: '/snacks',
      name: 'SnacksView',
      component: SnacksView
    },
    {
      path: '/barberia',
      name: 'Barberia',
      component: Barberia
    },
    {
      path: '/refacciones',
      name: 'Refacciones',
      component: Refacciones
    },
    {
      path: '/register',
      name: 'Registro',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
