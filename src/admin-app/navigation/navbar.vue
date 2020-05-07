<style scoped>

</style>

<template>
<div class="card">
  <router-link to="/comments">Revisar comentarios</router-link>
  <router-link to="/leaderboard">Tabla de posiciones</router-link>
  <button v-on:click="logout">logout</button>
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