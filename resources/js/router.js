import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/Pages/Home.vue';
import Infoblini from '@/Pages/Infoblini.vue';
import Create from '@/Pages/Create.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/infoblini/:id',
    name: 'infoblini',
    component: Infoblini,
    props: true
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
