import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import RecipesView from "../views/RecipesView.vue";
import SpecialtyView from "../views/SpecialtyView.vue";
import Contact from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import CreateView from "../views/CreateView.vue";
import PostView from "../views/PostView.vue";
import UwUView from "../views/UwUView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: RecipesView,
    },
    {
      path: "/specialty",
      name: "specialty",
      component: SpecialtyView,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/create",
      name: "create",
      component: CreateView,
    },
    {
      path: "/post",
      name: "post",
      component: PostView,
    },
    {
      path: "/uwu",
      name: "uwu",
      component: UwUView,
    },
  ],
});

export default router;
