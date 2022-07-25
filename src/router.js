import { createRouter , createWebHistory } from "vue-router";


import TheTop from './pages/TheTop.vue';
import TheNew from './pages/TheNew.vue';
import TheShow from './pages/TheShow.vue';
import TheAsk from './pages/TheAsk.vue';
import TheJobs from './pages/TheJobs';
import NotFound from './pages/NotFound.vue';
import TheArticles from './pages/TheArticles.vue'

const router = createRouter({    
    history: createWebHistory(),
    routes:[
        {
         path: '/' , 
         redirect: '/top'
        },
        {
         path: '/top',
         component: TheTop,
        },
        {
         path: '/new',
         component: TheNew,   
        },
        {
         path: '/show',
         component: TheShow,   
        },
        {
         path: '/ask',
         component: TheAsk,   
        },
        {
         path: '/jobs',
         component: TheJobs,   
        },
        {
        path: '/story/:id',
        component: TheArticles,   
        },
        {
        path: '/:notFound(.*)',
        component: NotFound
        }
    ]
})

export default router;