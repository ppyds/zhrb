import Vue from 'vue'
import Router from 'vue-router'
import newsInfo from "../pages/newsInfo/newsInfo";

const home = () => Promise.resolve(import("../pages/home/home"))
import store from "../store"

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      component: home,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    {
      path: '/info/:id',
      component: newsInfo,
      meta: {
        keepAlive: true // 需要缓存
      }
    }
  ]
})
router.afterEach((to => {
    const ele = document.getElementById("page");
    console.log(store.state.top[to.path])
    ele.onscroll = () => {
      store.dispatch("setTop",[to.path, document.getElementById('page').scrollTop]);
    }
}))
export default router;
