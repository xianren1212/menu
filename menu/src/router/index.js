import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{index:0}
  },
  {
    path: '/classify',
    name: 'Classify',
    meta:{index:0},

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Classify.vue')
  },
  {
    path: '/foodBasket',
    name: 'FoodBasket',
    meta:{index:0},

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FoodBasket.vue')
  },
  {
    path: '/more',
    name: 'More',
    meta:{index:0},

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/More.vue')
  },
  {
    path: '/foodList',
    name: 'FoodList',
    meta:{index:1},

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FoodList.vue')
    
  },
  {
    path: '/foodListItemDetails',
    name: 'FoodListItemDetails',
    meta:{index:2},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FoodListItemDetails.vue')
  },
  {
    path: '/kitchenStories',
    name: 'KitchenStories',
    meta:{index:1},

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/KitchenStories.vue')
  },
  {
    path: '/moreHistory',
    name: 'MoreHistory',
    meta:{index:1},

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MoreHistory.vue')
  },
  {
    path: '/moreCollect',
    name: 'MoreCollect',
    meta:{index:1},

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MoreCollect.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta:{index:1},

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta:{index:1},

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  routes,
  // 滚动路由，解决页面滚动了，跳转到另一个页面也会滚动的问题
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
})

export default router
