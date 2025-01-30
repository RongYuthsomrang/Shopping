//npm i vue-router
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Product from "../pages/Product.vue";
import Profile from "../pages/Profile.vue";

const routes = [
    {path:"/",component:Home},
    {path:"/product",component:Product},
    {path:"/profile",component:Profile}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router