import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Pages/Home/Index';
import Shop from '@/Pages/Shop/Index';
import Community from '@/Pages/Community/Index';
import Directory from '@/Pages/Directory/Index';
import StolenBikes from '@/Pages/StolenBikes/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/directory',
      name: 'Directory',
      component: Directory,
    },
    {
      path: '/community',
      name: 'Community',
      component: Community,
    },
    {
      path: '/stolen-bikes',
      name: 'StolenBikes',
      component: StolenBikes,
    },
  ],
});
