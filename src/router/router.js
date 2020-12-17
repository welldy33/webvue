import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Test/Home.vue'
import About from '../views/Test/About.vue'
import JobDetails from '../views/Test/jobs/JobDetails.vue'
import NotFound from '../views/Test/NotFound.vue'
import Weather from '../views/Test/Weather.vue'
const routes=[
    {
        path:'/',
        name:'Home',
        component:Home,
        props:true
    },
    {
        path:'/about',
        name:'About',
        component:About,
        props:true
    },
    {
        path:'/Weather',
        name:'Weather',
        component:Weather,
        
    },
    {
        path:'/jobs/:slug',
        name:'JobDetails',
        component:JobDetails,
        props:true
    },
    {
        path:'/:catchAll(.*)',
        name:'NotFound',
        component:NotFound
    }
]

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),routes
});

export default router;