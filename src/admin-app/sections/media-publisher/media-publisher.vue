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
      <h1 class="mt-4">Publicar Multimedia</h1>
      <label for="Titulo" class="mt-4">Titulo</label>
      <input v-model="title" placeholder="Titulo" class="form-control mb-4">
      <label for="Url de contenido">Url de contenido</label>
      <input v-model="image" placeholder="Url de contenido" class="form-control mb-4">

      <label class="form-check-label" for="photoRadio">Foto</label>
      <input v-model="media_type" class="form-control mb-4" type="radio" name="exampleRadios" id="photoRadio" value="foto" checked>
      
      <label class="form-check-label" for="videoRadio">Video</label>
      <input v-model="media_type" class="form-control mb-4" type="radio" name="exampleRadios" id="videoRadio" value="video">
      
      <label for="Contenido">Contenido</label>
      <textarea v-model="content" placeholder="Contenido" class="form-control mb-4" rows="5"></textarea>
      <button class="d-block ml-auto mb-4 btn btn-outline-primary">Publicar</button>
    </form>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { postMedia } from  '../../../api'

@Component
export default class extends Vue {
  title: string = ""
  image: string = ""
  media_type: string = ""
  content: string = ""
  showSuccess: boolean = false
  error: boolean = false

  submit() {
    postMedia({ title: this.title, image_url: this.image, media_type: this.media_type, content: this.content })
      .then(() => this.showSuccess = true)
      .catch(() => this.error = false)
  }
}
</script>