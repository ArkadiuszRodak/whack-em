import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GameView from '../views/GameView.vue';
import OptionsView from '../views/OptionsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Menu',
    component: HomeView,
  },
  {
    path: '/game',
    name: "Let's play",
    component: GameView,
  },
  {
    path: '/options',
    name: 'Options',
    component: OptionsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
