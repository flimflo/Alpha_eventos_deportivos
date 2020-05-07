import Vue from 'vue'
import VueRouter from 'vue-router'
import { AuthStatus, AuthService } from './data/services/AuthService'
import { getRouterConfig } from './navigation/getRouterConfig'
import NavBar from './navigation/navbar.vue'
import './bootstraper'

Vue.use(VueRouter)

const config = getRouterConfig()
const router = new VueRouter({ routes: config.allRoutes, mode: 'history' })

type DataType = {
  authStatus: AuthStatus,
  showNavbar: boolean,
}

new Vue<DataType>({
  el: '#app',
  data: function () {
    return {
      authStatus: AuthStatus.UNDEFINED,
      showNavbar: true,
    }
  },
  created: function() {
    AuthService.default.authStatus.subscribe(status => {
      this.authStatus = status
      this.showNavbar = status === AuthStatus.AUTHORIZED

      if (status === AuthStatus.UNAUTHORIZED) {
        router.push('/auth')
      }

      if (status === AuthStatus.AUTHORIZED && router.currentRoute.path === '/auth') {
        router.push('/comments')
      }
    })

    router.beforeResolve((to, from, next) => {
      if (this.authStatus !== AuthStatus.AUTHORIZED && config.pathIsAuthGuarded(to.path)) {
        next('/auth')
      } else {
        next()
      }
    })
  },
  template: `
  <div>
    <NavBar v-if="showNavbar"/>
    <router-view></router-view>
  </div>
  `,
   router,
   components: { NavBar }
})