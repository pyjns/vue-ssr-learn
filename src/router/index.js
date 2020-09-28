import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter(){
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('../views/index.vue') },
      { path: '/list', component: () => import('../views/list.vue') },
      { path: '/detail', component: () => import('../views/detail.vue') },
    ]
  })
}