import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // Dashboard
  {
    path: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/dashboard.vue"),
  },
  {
    path: '/',
    redirect: '/dashboard',
  },

  // Rooms and rates
  {
    path: "/rooms-and-rates",
    redirect: { name: 'rooms-and-rates__rate-plans' },
  },
  {
    name: 'rooms-and-rates__rate-plans',
    path: '/rooms-and-rates/rate-plans',
    component: () =>
      import(/* webpackChunkName: "rate-plans" */ "../views/rooms-and-rates/rate-plans.vue"),
  },
  {
    name: 'rooms-and-rates__room-types',
    path: '/rooms-and-rates/room-types',
    component: () =>
      import(/* webpackChunkName: "room-types" */ "../views/rooms-and-rates/room-types.vue"),
  },

  // Distributions
  {
    path: "/distributions",
    redirect: { name: 'distributions__inventory' },
  },
  {
    name: 'distributions__inventory',
    path: '/distributions/inventory',
    component: () =>
      import(/* webpackChunkName: "inventory" */ "../views/distributions/inventory.vue"),
  },
  {
    name: 'distributions__channels',
    path: '/distributions/channels',
    component: () =>
      import(/* webpackChunkName: "channels" */ "../views/distributions/channels.vue"),
  },

  // Distributions
  {
    path: "/direct-booking",
    redirect: { name: 'direct-booking__direct-booking-rates' },
  },
  {
    name: 'direct-booking__direct-booking-rates',
    path: '/direct-booking/direct-booking-rates',
    component: () =>
      import(/* webpackChunkName: "inventory" */ "../views/direct-booking/direct-booking-rates.vue"),
  },

  // Error
  {
    path: '/error',
    component: () =>
      import(/* webpackChunkName: "empty" */ "../views/error.vue"),
  },

  // Redirect
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "empty" */ "../views/empty.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
