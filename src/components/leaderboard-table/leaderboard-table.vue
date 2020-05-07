<style>
.card {
  box-shadow: 1px 2px 4px #d2d2d2;
  border-radius: 8px;
  overflow: hidden;
}
</style>
<template>
<div id='example-3' class="card">
  <div>Ha ocurrido un error al cargar la tabla de posiciones</div>
  <div>Ha ocurrido un error al cargar la tabla de posiciones</div>
  <table>
    <thead>
      <th>Equipo</th>
      <th>Goles a Favor</th>
      <th>Goles en Contra</th>
      <th>Puntos</th>
    </thead>
    <tbody>
      <tr v-for="item in teams" :key="item.index">
        <td>{{ item.teamName }}</td>
        <td>{{ item.goals }}</td>
        <td>{{ item.goalsAgainst }}</td>
        <td>{{ item.points }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getLeaderboard } from '../../api/leaderboard'
import { TeamData } from '../../models/TeamData'

@Component
export default class extends Vue {
  teams: TeamData[] = []
  showError = false
  showLoading = false

  created() {
    getLeaderboard().then(teams => {
      this.teams = teams
    })
  }
}

</script>