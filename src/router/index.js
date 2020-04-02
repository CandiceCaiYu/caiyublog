import Vue from 'vue'
import Router from 'vue-router'
import Home from '@views/Home'
import ImagesPage from '@views/ImagesPage'
console.log('ImagesPage', ImagesPage)
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes:[
    {
      path:'/',
      name: 'Home',
      component: Home,
      children:[]
    },{
      name: 'ImagePage',
      path: '/ImagesPage',
      component: ImagesPage
    }
  ]
})

export default router