import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router';
import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import GameView from '@/views/GameView.vue';
import OptionsView from '@/views/OptionsView.vue';
import ScoresView from '@/views/ScoresView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/game',
    component: GameView,
  },
  {
    path: '/options',
    component: OptionsView,
  },
  {
    path: '/scores',
    component: ScoresView,
  },
  {
    path: '/about',
    component: AboutView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
