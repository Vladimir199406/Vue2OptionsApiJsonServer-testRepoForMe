import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () =>
      import(/* webpackChunkName: "catalog" */ "../views/Catalog.vue"),
  },
  {
    path: "/tenders",
    name: "Tenders",
    component: () =>
      import(/* webpackChunkName: "tenders" */ "../views/Tenders.vue"),
  },
  {
    path: "/trade",
    name: "Trade",
    component: () =>
      import(/* webpackChunkName: "trade" */ "../views/Trade.vue"),
  },
  {
    path: "/web-shop-nl",
    name: "WebShopNl",
    component: () =>
      import(/* webpackChunkName: "web-shop=nl" */ "../views/WebShopNl.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "ErrorNotFound",
    component: () =>
      import(
        /* webpackChunkName: "error-not-found" */ "../views/ErrorNotFound.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
