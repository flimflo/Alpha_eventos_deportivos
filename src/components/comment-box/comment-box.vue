<style scoped>
#header {
  padding: 8px;
}

form {
  display: flex;
  border: 1px solid #d2d0d0;
  border-radius: 8px;
  height: 40px;
  overflow: hidden;
}
.card {
  box-shadow: 1px 2px 4px #6b6b6b;
  border-radius: 4px;
  overflow: hidden;
  padding: 12px;
}

input {
  padding: 8px;
  border-radius: 2px;
  border: none;
  margin: 0;
  flex-grow: 1;
}

.comment-list {
  list-style: none;
  padding: 0;
}

.comment {
  padding: 12px;
  border-bottom: 1px solid #d2d0d0;
}

button {
  padding: 8px;
  border: none;
  color: #000000;
  background-color: white;
  width: 100px;
}
</style>

<template>
<div class="card">
  <h3 id="header">Comentarios</h3>
  <div v-if="showSuccess" class="alert alert-success" role="alert">Comentario esperando aprobación</div>
  <form v-on:submit.prevent="submit">
    <input v-model="message" placeholder="Nuevo Comentario">
    <button>Enviar</button>
  </form>
  <ul class="comment-list">
    <li
      class="comment"
      v-for="comment in comments"
      :key="comment.content">
      <span>{{ comment.publishedAt }}</span>: {{ comment.content }}
    </li>
  </ul>
</div>
</template>

<script>
import { CommentStore } from './CommentStore'
export default {
  props: ['sectionId'],
  data: function () {
    return {
      comments: [],
      message: "",
      showSuccess: false,
    }
  },
  created: function() {
    this.commentStore = new CommentStore()
    this.commentStore.getComments(this.sectionId)
    this.commentStore.comments.subscribe((comments) => {
      this.comments = comments
    })
  },
  methods: {
    submit: function() {
      this.commentStore.postComment(this.message).then(() => {
        this.showSuccess = true
      })
    },
  },
}
</script>
