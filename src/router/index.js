import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Main from '../components/Main'
import Users from '../smallcomponents/Users'
import Posts from '../smallcomponents/Posts'
import UserDetail from '../smallcomponents/details/UserDetail'
import PostDetail from '../smallcomponents/details/PostDetail'
import NotFound from '../components/NotFound'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Login
    },
    {
        path:'/homepage',
        component:Main
    },
    {
        path:'/users',
        component:Users,
    },
    {
        path:'/posts',
        component:Posts
    },
    {
        path:'/users/userdetail/:id',
        name:'UserDetail',
        component:UserDetail,
        props:true
    },
    {
        path:'/posts/postdetail/:id',
        name:'PostDetail',
        component:PostDetail,
        props:true
    },
    {
        path:'/:catchAll(.*)',
        name:'NotFound',
        component:NotFound
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router