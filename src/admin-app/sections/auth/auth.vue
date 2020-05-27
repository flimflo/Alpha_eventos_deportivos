<style scoped>
#header {
  padding: 8px;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  box-shadow: 1px 2px 4px #d2d2d2;
  border-radius: 8px;
  overflow: hidden;
  min-width: 500px;
  padding: 20px;
}

input {
  display: block;
  padding: 8px;
  border: 1px solid #d2d0d0;
  border-radius: 2px;
  margin: 10px 0;
  flex-grow: 1;
  width: 100%;
}

</style>

<template>
<div class="container">
  <div class="card">
    <form v-on:submit.prevent="login">
      <label for="Email">Email address</label>
      <input v-model="email" placeholder="Email" class="form-control">
      <label for="Password">Password</label>
      <input v-model="password" placeholder="Password" class="form-control" type="password">
      <span v-if="error">error</span>
      <span v-if="loading">cargando</span>
      <button class="d-block ml-auto btn btn-outline-primary">Login</button>
    </form>
  </div>
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