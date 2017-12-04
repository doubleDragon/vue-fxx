import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})
