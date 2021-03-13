import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Error from "../views/Error";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/error",
    name: "Error",
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
