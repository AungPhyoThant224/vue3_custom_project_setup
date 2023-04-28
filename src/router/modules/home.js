export const home = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/Home.vue"),
    meta: {
        layout: 'admin',
    }
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home/Home.vue"),
    meta: {
        layout: 'admin',
    }
  }
];

