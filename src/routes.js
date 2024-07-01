import {createWebHistory,createRouter} from 'vue-router'
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'
import AddRestaurant from './components/AddRestaurant.vue'

const routes = [
    {
        name:"Home",
        path:"/",
        component:Home
    },
    {
        name:"UpdateRestaurant",
        path:"/update-restaurant/:id",
        component:UpdateRestaurant
    },
    {
        name:"AddRestaurant",
        path:"/add-restaurant",
        component:AddRestaurant
    },
    {
        name:"SignUp",
        path:"/sign-up",
        component:SignUp
    },
    {
        name:"Login",
        path:"/login",
        component:Login
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;