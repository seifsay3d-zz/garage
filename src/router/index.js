import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Pages/Home/Index';
import Shop from '@/Pages/Shop/Index';
import Product from '@/Pages/Shop/Product';
import Community from '@/Pages/Community/Index';
import Directory from '@/Pages/Directory/Index';
import Article from '@/Pages/Community/Article';
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
      path: '/product',
      name: 'Product',
      component: Product,
    },
    {
      path: '/directory',
      name: 'Directory',
      component: Directory,
    },
    {
      path: '/article',
      name: 'Article',
      component: Article,
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
