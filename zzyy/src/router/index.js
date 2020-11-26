import Vue from 'vue'
import Router from 'vue-router'

const Nav = (resolve) => {
    import ('../components/Nav').then((module) => {
        resolve(module)
    })
}

const Excl = (resolve) => {
    import ('../pages/Excl').then((module) => {
        resolve(module)
    })
}

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/Excl'
    },{
        path: '/Excl',
        component: Excl,
      }
]

export default new Router({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return false
    }
})