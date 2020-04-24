import Vue from 'vue'
import Router from 'vue-router'
import Example from '../components/Example.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
