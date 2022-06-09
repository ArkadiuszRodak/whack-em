import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GameView from '../views/GameView.vue';
import OptionsView from '../views/OptionsView.vue';
import ScoresView from '../views/ScoresView.vue';

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
  {
    path: '/scores',
    name: 'Score Board',
    component: ScoresView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
