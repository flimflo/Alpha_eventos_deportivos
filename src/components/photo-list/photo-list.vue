<style scoped>
.card {
  box-shadow: 0px 8px 8px #58585869;
  border-radius: 8px;
  max-width: 750px;
  margin: auto;
  margin-bottom: 24px;
}

th, td {
  padding: 8px
}

img {
  width: 100%;
}

.tablerow:nth-child(odd)  {
  background: #ededed;
}

h1 {
  margin: 0;
}

h1, p, span {
  padding: 12px;
}

span {
  color: #6b6b6b;
  font-weight: 100;
}
</style>
<template>
<div>
  <div v-if="showError">Ha ocurrido un error al cargar las fotos</div>
  <div v-for="(media, index) in mediaPhotos" :key="index" class="card">
    <h1>{{ media.title }}</h1>
    <span>{{ media.date }}</span>
    <img v-bind:src="media.image_url">
    <p>{{ media.content }}</p>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getMediaPhoto } from '../../api'
import { Media } from '../../models/Media'


@Component
export default class extends Vue {
  mediaPhotos: Media[] = []
  showError = false
  showLoading = false

  created() {
    getMediaPhoto().then(mediaPhotos => {
      console.log(mediaPhotos);
      this.mediaPhotos = mediaPhotos
    }).catch(err => {
      this.showError = true
    })
  }
}

</script>