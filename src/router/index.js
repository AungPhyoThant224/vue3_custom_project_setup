import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './modules/routes'

const constantRoutes = [
  ...routes,
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/404/404.vue")
  },
  {
    path: "/:patchAll(\\S+)",
    redirect: "/404",
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
