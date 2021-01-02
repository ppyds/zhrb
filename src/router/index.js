import Vue from 'vue'
import Router from 'vue-router'
import newsInfo from "../pages/newsInfo/newsInfo";
const home = () =>Promise.resolve(import("../pages/home/home"))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:home
    },
    {
      path: '/info/:id',
      component:newsInfo
    }
  ]
})
