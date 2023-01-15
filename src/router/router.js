
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import NotFound from '@/layouts/NotFound'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
]


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router