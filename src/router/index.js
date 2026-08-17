import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/AppHome'
import Register from '../views/AppRegister'
import Login from '../views/AppLogin'
import Admin from '../views/AppAdmin'
import AdminDashboard from '../components/admin/AdminDashboard'
import AdminVerification from '../components/admin/AdminVerification'
import AdminProfessionals from '../components/admin/AdminProfessionals'
import AdminCompanies from '../components/admin/AdminCompanies'
import AdminJobOpenings from '../components/admin/AdminJobOpenings'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        children: [
            {
                path: '',
                name: 'AdminDashboard',
                component: AdminDashboard
            },
            {
                path: 'verification',
                name: 'AdminVerification',
                component: AdminVerification
            },
            {
                path: 'professionals',
                name: 'AdminProfessionals',
                component: AdminProfessionals
            },
            {
                path: 'companies',
                name: 'AdminCompanies',
                component: AdminCompanies
            },
            {
                path: 'job-openings',
                name: 'AdminJobOpenings',
                component: AdminJobOpenings
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router