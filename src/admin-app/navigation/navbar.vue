<style scoped>

</style>

<template>
<div class="card">
  <nav class="navbar navbar-expand-lg">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/comments">Revisar comentarios</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/leaderboard">Tabla de posiciones</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/news">Noticias</router-link>
      </li>
    </ul>
    <button class="btn btn-outline-success" v-on:click="logout">logout</button>
  </nav>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AuthService } from '../data/services/AuthService'

@Component
export default class extends Vue {
  logout() {
    AuthService.default.logout()
  }
}
</script>