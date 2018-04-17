import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Index from '@/components/Index'
import Inner from '@/components/Inner'
import ShowArticle from '@/components/ShowArticle'
import Manager from '@/components/Manager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/blog',
      component: Index,
      children: [
        {
          path: '/',
          component: Inner
        },
        {
          path: '/tools',
          component: Inner
        },
        {
          path: '/article/:id',
          component: ShowArticle,
          props: true
        },
        {
          path: '/manager',
          component: Manager
        }
      ]
    }
  ]
})
