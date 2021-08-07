import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Settings from "@/views/Settings.vue";

declare module "vue-router" {
  interface RouteMeta {
    /** Types for route metadata. */
    example?: boolean;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/settings",
    component: Settings,
    name: "Settings",
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "Home" },
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
