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

iframe {
  height: 400px;
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

@media (min-width: 300px){
  iframe {
    height: 200px;
  }
}

@media (min-width: 600px) and (max-width: 990px){
  iframe {
    height: 400px;
  }
}

@media (min-width:991px){
  iframe {
    height: 500px;
  }
}
</style>
<template>
<div>
  <div v-if="showError">Ha ocurrido un error al cargar los videos</div>
  <div v-for="(media, index) in mediaVideos" :key="index" class="card">
    <h1>{{ media.title }}</h1>
    <span>{{ media.date }}</span>
    <iframe v-bind:src="media.image_url"></iframe>
    <p>{{ media.content }}</p>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getMediaVideo } from '../../api'
import { Media } from '../../models/Media'


@Component
export default class extends Vue {
  mediaVideos: Media[] = []
  showError = false
  showLoading = false

  created() {
    getMediaVideo().then(mediaVideos => {
      console.log(mediaVideos);
      this.mediaVideos = mediaVideos
    }).catch(err => {
      this.showError = true
    })
  }
}

</script>