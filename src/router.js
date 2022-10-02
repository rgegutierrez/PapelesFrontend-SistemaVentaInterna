import { createRouter,createWebHistory} from 'vue-router'
import Login from "./components/Login.vue"

const Venta = () => import("./components/Venta.vue")
const Stock = () => import("./components/Stock.vue")
const History = () => import("./components/History.vue")

const routes = [
    {
        path: "/",
        alias: ['/login'],
        name: "Login",
        component: Login,
    },
    {
        path: "/venta",
        name: "Venta",
        component: Venta,
    },
    {
        path: "/stock",
        name: "Stock",
        component: Stock,
    },
    {
        path: "/history",
        name: "History",
        component: History,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    next();
    // const publicPages = ['/login', '/register'];
    // const authRequired = !publicPages.includes(to.path);
    // const loggedIn = localStorage.getItem('token');

    // if (authRequired && !loggedIn) {
    //     next('/login');
    // } else {
    //     next();
    // }
});
export default router;