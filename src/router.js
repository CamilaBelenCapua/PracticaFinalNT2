import Vue from 'vue'
import VueRouter from 'vue-router'
import Input from './components/Input.vue'
import Answers from './components/Answers.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/Input' },
        { path: '/Input', component: Input },
        { path: '/Answers', component: Answers },
    ]
})