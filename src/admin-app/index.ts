import Vue from 'vue'
import VueRouter from 'vue-router'
import { AuthStatus, AuthService } from './data/services/AuthService'
import { getRouterConfig } from './routing/getRouterConfig'

Vue.use(VueRouter)

const config = getRouterConfig()
const router = new VueRouter({ routes: config.allRoutes, mode: 'history' })

type DataType = {
  authStatus: AuthStatus
}

new Vue<DataType>({
  el: '#app',
  data: function () {
    return {
      authStatus: AuthStatus.UNDEFINED
    }
  },
  created: function() {
    AuthService.default.authStatus.subscribe(status => {
      this.authStatus = status

      if (status === AuthStatus.UNAUTHORIZED || status === AuthStatus.UNDEFINED) {
        router.push('/auth')
      }
    })

    router.beforeEach((to, from, next) => {
      if (this.authStatus !== AuthStatus.AUTHORIZED && config.pathIsAuthGuarded(to.path)) {
        next('/auth')
      } else {
        next()
      }
    })
  },
  template: `
  <div>
    <router-link to="/comments">OtrasCosas</router-link>
    <router-link to="/auth">Login</router-link>
    <router-view></router-view>
  </div>
  `,
   router,
})