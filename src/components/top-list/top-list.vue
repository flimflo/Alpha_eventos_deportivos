<style scoped>

h4 {
  font-weight: 200;
}

h4, h5 {
  text-align: start;
}

.container {
  min-height: 300px;
}
</style>
<template>
<div class="row mx-auto container">
  <div class="card card-lomejor col-md mr-3" v-for="(item, index) in cards" v-bind:key="index">
    <img v-bind:src="item.image_url" class="card-img-top col-md" alt="...">
    <div class="card-body">
      <h4 class="d-flex justify-content-around card-title">{{ item.title }}</h4>
      <h5 class="d-flex justify-content-around card-title">{{ item.subtitle }}</h5>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getBestOfLeague } from '../../api'
import { Card } from '../../models/NewsArticle'


@Component
export default class extends Vue {
  cards: Card[] = []
  showError = false
  showLoading = false

  created() {
    getBestOfLeague().then(best => {
      console.log(best)
      this.cards = best
    }).catch(err => {
      this.showError = true
    })
  }
}

</script>