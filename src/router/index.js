import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/blog',
      component: Index
      // children: [
      //   {
      //     path: 'profile',
      //     component: UserProfile
      //   },
      //   {
      //     path: 'posts',
      //     component: UserPosts
      //   }
      // ]
    }
  ]
})
