import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/champions",
    name: "Champions",
    component: () => import("../views/Champions.vue"),
  },
  {
    path: "/communities",
    name: "Communities",
    component: () => import("../views/Communities.vue"),
  },
  {
    path: "/mchanga-communities",
    name: "MchangaCommunities",
    component: () => import("../views/mchanga-communities.vue"),
  },
  {
    path: "/medical-communities",
    name: "MedicalCommunities",
    component: () => import("../views/medical-communities.vue"),
  },
  {
    path: "/mobile-fundraiser",
    name: "MobileFundraiser",
    component: () => import("../views/mobile-fundraiser.vue"),
  },
  {
    path: "/online-fundraiser",
    name: "OnlineFundraiser",
    component: () => import("../views/online-fundraiser.vue"),
  },
  {
    path: "/resources",
    name: "Resources",
    component: () => import("../views/resources.vue"),
  },
  {
    path: "/share",
    name: "Share",
    component: () => import("../views/share.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/register.vue"),
  },
  {
    path: "/personal-detail",
    name: "PersonalDetail",
    component: () => import("../views/personal-detail.vue"),
  },
  {
    path: "/activate-your-fundraiser",
    name: "ActivateYourFundraiser",
    component: () => import("../views/activate-your-fundraiser.vue"),
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import("../views/faq.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
