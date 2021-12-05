import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login_page from '@/views/Login_page.vue';
import Order from "@/views/Order.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login_page",
    name: "Login_page",
    component: Login_page,
    children: [
      {
        path: "/order",
        name: "Order",
        component: Order,
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;