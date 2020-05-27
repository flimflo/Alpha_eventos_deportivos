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
        <th scope="col">Equipo</th>
        <th scope="col">A favor</th>
        <th scope="col">En contra</th>
        <th scope="col">Puntos</th>
      </tr>
    </thead>
    <tbody class="table-striped">
    <tr v-for="(item, index) in table" :key="item.teamName">
      <td>{{ index + 1 }}</td>
      <td>{{ item.teamName }}</td>
      <td>{{ item.goals }}</td>
      <td>{{ item.goalsAgainst }}</td>
      <td>{{ item.points }}</td>
    </tr>
    </tbody>
  </table>
  <div class="container align-items-end">
  <form v-on:submit.prevent="appendTeam" class="d-flex justify-content-between">
    <div class="mr-3">
      <label for="Equipo" class="mt-4">Equipo</label>
      <input type="text" placeholder="Equipo" v-model="teamName" class="form-control">
    </div>
    <div class="mr-3">
      <label for="A favor" class="mt-4">A favor</label>
      <input type="number" placeholder="A favor" v-model="goalsAgainst" class="form-control">
    </div>
    <div class="mr-3">
      <label for="En contra" class="mt-4">En contra</label>
      <input type="number" placeholder="En contra" v-model="goals" class="form-control">
    </div>
    <div>
      <label for="Puntos" class="mt-4">Puntos</label>
      <input type="number" placeholder="Puntos"  v-model="points" class="form-control">
    </div>
  </form>
    <button v-on:click="appendTeam" class="btn btn-outline-primary">Agregar equipo</button>
    <button v-on:click="submit" class="btn btn-outline-success ml-3">Guardar</button>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { LeaderBoardVM } from './leaderboard-table-vm'
import { LeaderBoardUiState } from './leaderboard-table-ui-state'

type LeaderBoardForm = {
  teamName: string,
  goalsAgainst: number,
  goals: number,
  points: number
}

@Component
export default class extends Vue implements LeaderBoardForm, LeaderBoardUiState {
  private vm = new LeaderBoardVM()

  teamName = ""
  goalsAgainst = 0
  goals = 0
  points = 0

  table = []
  loading = false
  error = true
  showSuccess = false

  created() {
    this.vm.uiState.subscribe(uiState => Object.assign(this, uiState))
  }

  appendTeam() {
    this.vm.appendTeam(
      this.teamName, this.goalsAgainst, this.goals, this.points)
  }

  submit() {
    this.vm.submit()
  }
}

</script>