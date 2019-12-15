import Vue from 'vue';
import Router from 'vue-router';
import about from '@/components/about';
import skill from '@/components/skill';
import home from '@/components/home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: home
    },{
      path: '/about',
      component: about
    }, {
      path: '/skill',
      component: skill
    }
  ]
});
