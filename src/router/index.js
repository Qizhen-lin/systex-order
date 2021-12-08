import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login_page from '@/views/Login_page.vue';
import Announcement from '@/views/announcement/Announcement.vue';
import Order from "@/views/order/Order.vue";
import PersonalInformation from "@/views/personalInformation/PersonalInformation.vue";
import PersonalOrderRecord from '@/views/personalOrderRecord/PersonalOrderRecord.vue';
import SettingManagement from '@/views/settingManagement/SettingManagement.vue'

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
        path: "/announcement",
        name: "Announcement",
        component: Announcement,
      },
      {
        path: "/order",
        name: "Order",
        component: Order,
      },
      {
        path: "/personal-information",
        name: "PersonalInformation",
        component: PersonalInformation,
      },
      {
        path: "/personal_order_record",
        name: "PersonalOrderRecord",
        component: PersonalOrderRecord,
      },
      {
        path: "/setting_managment",
        name: "SettingManagement",
        component: SettingManagement,
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