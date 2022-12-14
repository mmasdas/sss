import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AboutView" */ '../views/AboutView.vue')
  },
  {
    path: '/details/:slug',
    props: true,
    name: 'details',
    component: () => import(/* webpackChunkName: "DetailsView" */ '../views/DetailsView.vue'),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () => import(/* webpackChunkName: "ExperienceDetailsView" */ '../views/ExperienceDetailsView.vue'),
      }
    ],
    beforeEnter: (to, from, next) => {
      console.log(to.params);
      const exists = store.destinations.find(
        destination => destination.slug == to.params.slug
      )
      if (exists) {
        next();
      } else {
        next('/NotFound');
      }
    }
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFoundView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginVue.vue')
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import('../views/InvoicesView.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  console.log(to.matched.some(record => record.meta.requiresAuth))
  console.log(to.fullPath)

  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!store.user) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
  // to.matched.some(record => record.meta.requiresAuth)
  // to and from are both route objects. must call `next`.
})

export default router
