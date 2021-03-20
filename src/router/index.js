import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import("../views/Home" /* webpackChunkName: "home" */);
const Error = () => import("../views/Error" /* webpackChunkName: "error" */);
const ComingSoon = () => import ("../views/ComingSoon")

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
  },
  {
    path: "/comingsoon",
    name: "Coming Soon",
    component: ComingSoon
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
