<style scoped>
  form {
    max-width: 600px;
  }
</style>
<template>
  <div>
    <div class="container p-0">
    <div v-if="showSuccess" class="alert alert-success" role="alert">Tabla actualizada con exito</div>
    <div v-if="error" class="alert alert-danger" role="alert">Ha ocurrido un error al actualizar</div>
  </div>
    <form v-on:submit.prevent="submit" class="d-block container card mt-5">

      <label for="Titulo" class="mt-4">Titulo</label>
      <input v-model="title_1" placeholder="Titulo" class="form-control mb-4">
      <label for="Url de imagen">Url de imagen</label>
      <input v-model="image_url_1" placeholder="Url de imagen" class="form-control mb-4">
      <label for="Contenido">Subtitulo</label>
      <input v-model="subtitle_1" placeholder="Subtitulo" class="form-control mb-4">

      <label for="Titulo" class="mt-4">Titulo</label>
      <input v-model="title_2" placeholder="Titulo" class="form-control mb-4">
      <label for="Url de imagen">Url de imagen</label>
      <input v-model="image_url_2" placeholder="Url de imagen" class="form-control mb-4">
      <label for="Contenido">Subtitulo</label>
      <input v-model="subtitle_2" placeholder="Subtitulo" class="form-control mb-4">

      <label for="Titulo" class="mt-4">Titulo</label>
      <input v-model="title_3" placeholder="Titulo" class="form-control mb-4">
      <label for="Url de imagen">Url de imagen</label>
      <input v-model="image_url_3" placeholder="Url de imagen" class="form-control mb-4">
      <label for="Contenido">Subtitulo</label>
      <input v-model="subtitle_3" placeholder="Subtitulo" class="form-control mb-4">

      <label for="Titulo" class="mt-4">Titulo</label>
      <input v-model="title_4" placeholder="Titulo" class="form-control mb-4">
      <label for="Url de imagen">Url de imagen</label>
      <input v-model="image_url_4" placeholder="Url de imagen" class="form-control mb-4">
      <label for="Contenido">Subtitulo</label>
      <input v-model="subtitle_4" placeholder="Subtitulo" class="form-control mb-4">

      <button class="d-block ml-auto mb-4 btn btn-outline-primary">Publicar</button>
    </form>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { postBestOfLeague } from  '../../../api'

@Component
export default class extends Vue {
  showSuccess: boolean = false
  error: boolean = false

  title_1: string = ""
  title_2: string = ""
  title_3: string = ""
  title_4: string = ""

  subtitle_1: string = ""
  subtitle_2: string = ""
  subtitle_3: string = ""
  subtitle_4: string = ""

  image_url_1: string = ""
  image_url_2: string = ""
  image_url_3: string = ""
  image_url_4: string = ""

  submit() {
    const that = this as any
    postBestOfLeague([
      { title: that.title_1, subtitle: that.subtitle_1, image_url: that.image_url_1 },
      { title: that.title_2, subtitle: that.subtitle_2, image_url: that.image_url_2 },
      { title: that.title_3, subtitle: that.subtitle_3, image_url: that.image_url_3 },
      { title: that.title_4, subtitle: that.subtitle_4, image_url: that.image_url_4 },
    ])
      .then(() => this.showSuccess = true)
      .catch(() => this.error = false)
  }
}
</script>