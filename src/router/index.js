import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about.vue'
import skill from '@/components/skill.vue'
import home from '@/components/home.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/about',
      component: about
    }, {
      path: '/skill',
      component: skill
    },{
      path: '/',
      components: home
    }
  ]
})
