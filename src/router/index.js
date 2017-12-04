import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '../components/main/MainHome.vue'
import MainCategory from '../components/main/MainCategory.vue'
import MainMy from '../components/main/MainMy.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MainHome',
            component: MainHome
        },
        {
            path: '/home',
            name: 'MainHome',
            component: MainHome
        },
        {
            path: '/category',
            name: 'MainCategory',
            component: MainCategory
        },
        {
            path: '/my',
            name: 'MainMy',
            component: MainMy
        }
    ]
})
