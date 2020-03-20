import Vue from 'vue'
import Router from 'vue-router'
import Home from '@views/Home'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes:[
    {
      path:'/',
      component: Home,
      children:[]
    }
  ]
})

export default router