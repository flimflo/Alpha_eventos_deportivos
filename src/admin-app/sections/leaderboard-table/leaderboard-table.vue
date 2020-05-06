<style>

</style>
<template>
<div id='example-3'>
  <div v-if="showSuccess">Tabla actualizada con exito</div>
  <div v-if="error">Ha ocurrido un error al actualizar</div>
  <div v-if="loading">Loading</div>
  <table>
    <tr v-for="item in table" :key="item.teamName">
      <td>{{ item.teamName }}</td>
      <td>{{ item.goalsAgainst }}</td>
      <td>{{ item.goalsScored }}</td>
      <td>{{ item.points }}</td>
    </tr>
  </table>
  <form v-on:submit.prevent="appendTeam">
    <input type="text" v-model="teamName">
    <input type="number" v-model="goalsAgainst">
    <input type="number" v-model="goalsScored">
    <input type="number" v-model="points">
    <button>Agregar</button>
  </form>

  <button v-on:click="submit">Guardar</button>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { LeaderBoardVM } from './leaderboard-table-vm'
import { LeaderBoardUiState } from './leaderboard-table-ui-state'

type LeaderBoardForm = {
  teamName: string,
  goalsAgainst: number,
  goalsScored: number,
  points: number
}

@Component
export default class extends Vue implements LeaderBoardForm, LeaderBoardUiState {
  private vm = new LeaderBoardVM()

  teamName = ""
  goalsAgainst = 0
  goalsScored = 0
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
      this.teamName, this.goalsAgainst, this.goalsScored, this.points)
  }

  submit() {
    this.vm.submit()
  }
}

</script>