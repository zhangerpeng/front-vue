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
    },
    {
        path: "/edit/:id",
        name: "user-edit",
        component: () => import("../views/EditView.vue")
    },
    {
        path: "/book",
        name: "book",
        component: () => import("../components-communication/BooksComponent.vue")
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)

export default router;


