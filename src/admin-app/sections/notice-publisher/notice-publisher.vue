<style scoped>

</style>
<template>
  <form v-on:submit.prevent="submit">
    <input v-model="title" placeholder="Titulo">
    <input v-model="image" placeholder="Url de imagen">
    <textarea v-model="content" placeholder="Contenido"></textarea>
    <button>Publicar</button>
  </form>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { postNewArticle } from  '../../../api'

@Component
export default class extends Vue {
  title: string = ""
  image: string = ""
  content: string = ""
  success: boolean = false
  error: boolean = false

  submit() {
    postNewArticle({ title: this.title, image_url: this.image, content: this.content })
      .then(() => this.success = true)
      .catch(() => this.success = false)
  }
}
</script>