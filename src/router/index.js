import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const route = {
  '/': {
    component: resolve => require(['@/database/introduction.md'], resolve),
    title: 'introduction'
  },  
  '/sign_in': {
    component: resolve => require(['@/database/sign_in.md'], resolve),
    title: 'sign_in'
  },
  '/crypto_pg1': {
    component: resolve => require(['@/database/crypto_pg1.md'], resolve),
    title: 'crypto_pg1'
  },
  '/crypto_pg2': {
    component: resolve => require(['@/database/crypto_pg2.md'], resolve),
    title: 'crypto_pg2'
  },
  '/crypto_pg3': {
    component: resolve => require(['@/database/crypto_pg3.md'], resolve),
    title: 'crypto_pg3'
  },
  '/crypto_pg4': {
    component: resolve => require(['@/database/crypto_pg4.md'], resolve),
    title: 'crypto_pg4'
  },
  '/crypto_pg5': {
    component: resolve => require(['@/database/crypto_pg5.md'], resolve),
    title: 'crypto_pg5'
  },
  '/crypto_pg6': {
    component: resolve => require(['@/database/crypto_pg6.md'], resolve),
    title: 'crypto_pg6'
  },
  '/crypto_pg7': {
    component: resolve => require(['@/database/crypto_pg7.md'], resolve),
    title: 'crypto_pg7'
  },
}

const router = new Router({
  routes: formatRoute(route)
})

function formatRoute(route) {
  return Object.keys(route).map((path) => {
    const { title, component } = route[path]

    return {
      name: path,
      component,
      path,
    }
  })
}

export default router