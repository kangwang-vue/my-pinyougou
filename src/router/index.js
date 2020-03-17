import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/user/Login.vue'),
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout/Layout.vue'),
    children: [
      {
        path: '/page',
        name: 'page',
        component: () => import('../views/page/Page.vue'),
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail/Detail.vue'),
      },
      {
        path: '/list',
        name: 'list',
        component: () => import('../views/list/List.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
