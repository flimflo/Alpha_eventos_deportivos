<style scoped>
.card {
  box-shadow: 1px 2px 4px #d2d2d2;
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  padding: 8px
}

.tablerow:nth-child(odd)  {
  background: #ededed;
}

</style>
<template>
<div id='example-3' class="card">
  <div v-if="showError">Ha ocurrido un error al cargar la tabla de roles</div>
  <table class="table">
    <thead class="thead-dark">
      <th scope="col">Equipo A</th>
      <th scope="col">Equipo B</th>
      <th scope="col">Cancha</th>
      <th scope="col">Hora</th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in roles" :key="index">
        <td>{{ item.equipoA }}</td>
        <td>{{ item.equipoB }}</td>
        <td>{{ item.cancha }}</td>
        <td>{{ item.hora }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getRoles } from '../../api'
import { RoleData } from '../../models/RoleData'

@Component
export default class extends Vue {
  roles: RoleData[] = []
  showError = false
  showLoading = false

  created() {
    console.log('asdf')
    getRoles().then(({ roles, date }) => {
      console.log(roles)
      this.roles = roles
    }).catch(err => {
      this.showError = true
    })
  }
}

</script>