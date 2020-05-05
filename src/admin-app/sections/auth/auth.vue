<style scoped>
#header {
  padding: 8px;
}

.card {
  box-shadow: 1px 2px 4px #d2d2d2;
  border-radius: 8px;
  overflow: hidden;
}

input {
  display: block;
  padding: 8px;
  border: 1px solid #d2d0d0;
  border-radius: 2px;
  margin: 10px 0;
  flex-grow: 1;
}

button {
  padding: 8px;
  border: none;
  background-color: red;
  width: 100px;
}
</style>

<template>
<div class="card">
  <form v-on:submit.prevent="login">
    <input v-model="email" placeholder="Email">
    <input v-model="password" placeholder="Password">
    <span v-if="error">error</span>
    <span v-if="loading">cargando</span>
    <button>Login</button>
  </form>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { AuthVM } from './auth-vm'
import { UiState } from './auth-ui-state'

@Component
export default class extends Vue implements UiState {
  private vm = new AuthVM()
  private password: string =  ''
  private email: string =  ''

  loading: boolean =  false
  error: boolean =  false

  created() {
    this.vm.uiState.subscribe(uiState => Object.assign(this, uiState))
  }

  login(test: String) {
    this.vm.login(this.email, this.password)
  }
}
</script>