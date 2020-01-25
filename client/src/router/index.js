import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/állományok',
    name: 'books',
    component: () => import('../views/Books.vue')
  },
  {
    path: '/olvasók',
    name: 'readers',
    component: () => import('../views/Readers.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
