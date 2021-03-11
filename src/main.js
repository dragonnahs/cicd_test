import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Home from './pages/home.vue'
import About from './pages/about.vue'

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      name: 'home'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    },
    {
      path: '/',
      redirect: 'home'
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
