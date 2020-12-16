import {createRouter,createWebHistory} from 'vue-router'
import IFrame from '../views/Template/IFrame.vue'
import About from '../views/Test/About.vue'
import Jobs from '../views/Test/jobs/Jobs.vue'
import JobDetails from '../views/Test/jobs/JobDetails.vue'
import NotFound from '../views/Test/NotFound.vue'

const routes=[
    {
        path:'/',
        name:'Home',
        component:IFrame
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/jobs',
        name:'Jobs',
        component:Jobs
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