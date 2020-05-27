<style>

</style>
<template>
<div id='example-3'>
  <div class="container p-0">
    <div v-if="showSuccess" class="alert alert-success" role="alert">Tabla actualizada con exito</div>
    <div v-if="error" class="alert alert-danger" role="alert">Ha ocurrido un error al actualizar</div>
  </div>
  <table class="table container mt-5 mb-5">
    <thead>
    <tr class="bg-primary">
        <th scope="col">#</th>
        <th scope="col">Equipo A</th>
        <th scope="col">Equipo B</th>
        <th scope="col">Cancha</th>
        <th scope="col">Hora</th>
      </tr>
    </thead>
    <tbody class="table-striped">
    <tr v-for="(item, index) in roles" :key="item.teamName">
      <td>{{ index + 1 }}</td>
      <td>{{ item.equipoA }}</td>
      <td>{{ item.equipoB }}</td>
      <td>{{ item.cancha }}</td>
      <td>{{ item.hora }}</td>
    </tr>
    </tbody>
  </table>
  <div class="container align-items-end">
  <form v-on:submit.prevent="appendTeam" class="d-flex justify-content-between">
    <div class="mr-3">
      <label for="Equipo" class="mt-4">Equipo A</label>
      <input type="text" placeholder="Equipo A" v-model="equipoA" class="form-control">
    </div>
    <div class="mr-3">
      <label for="Equipo" class="mt-4">Equipo B</label>
      <input type="text" placeholder="Equipo B" v-model="equipoB" class="form-control">
    </div>
    <div class="mr-3">
      <label for="En contra" class="mt-4">Cancha</label>
      <input type="text" placeholder="Cancha" v-model="cancha" class="form-control">
    </div>
    <div>
      <label for="Hora" class="mt-4">Hora</label>
      <input type="text" placeholder="Hora"  v-model="hora" class="form-control">
    </div>
  </form>
    <input type="text" placeholder="Fecha" v-model="fecha" class="form-control d-block w-auto mb-1">
    <button v-on:click="appendTeam" class="btn btn-outline-primary">Agregar equipo</button>
    <button v-on:click="submit" class="btn btn-outline-success ml-3">Guardar</button>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { RolesPublisherVM } from './roles-publisher-vm'
import { RolePublisherUiState } from './roles-publisher-ui-state'

type RoleForm = {
  equipoA: string
  equipoB: string
  cancha: string
  hora: string
}

@Component
export default class extends Vue implements RoleForm, RolePublisherUiState {
  private vm = new RolesPublisherVM()

  equipoA = ""
  equipoB = ""
  cancha = ""
  hora = ""
  fecha = ""

  roles = []
  loading = false
  error = true
  showSuccess = false

  created() {
    this.vm.uiState.subscribe(uiState => Object.assign(this, uiState))
  }

  appendTeam() {
    this.vm.appendTeam(this.equipoA, this.equipoB, this.cancha, this.hora)
  }

  submit() {
    this.vm.submit(this.fecha)
  }
}

</script>