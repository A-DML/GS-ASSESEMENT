import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@src/Home.vue')
      }

]
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to) {
      // If there is an hash in the request, we want to scroll to the section
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth'
        }
      }
  
      // Just in case there is no hash, we want to scroll to the top of the page.
      return { x: 0, y: 0 }
    }
  })
  
  export default router