import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blogs",
      name: "blogs",
      component: () => import("../views/blogs/BlogsView.vue"),
    },
    {
      path: "/blogs/add",
      name: "addBlogs",
      component: () => import("../views/blogs/AddBlogView.vue"),
    },
    {
      path: "/blogs/:id",
      name: "singleBlog",
      component: () => import("../views/blogs/single/SingleBlog.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/about/AboutView.vue"),
    },
    {
      path: "/blogs/:id/edit",
      name: "editBlog",
      component: () => import("../views/blogs/EditBlogView.vue"),
    },
  ],
});

export default router;
