import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/home",
        name: "Home",
        component: () => import("../views/HomeView.vue")
    },
    {
        path: "/create",
        name: "user-create",
        component: () => import("../views/CreatView.vue")
    },
    {
        path: "/details/:id",
        name: "user-detail",
        component: () => import("../views/DetailView.vue")
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)

export default router;


