import VueRouter from 'vue-router'
import login from '@/views/login/login.vue'
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:login
        },
        {
            path:'/login',
            component:login
        },
    ]
})
export default router