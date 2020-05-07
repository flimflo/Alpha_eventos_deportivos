<style scoped>
#header {
  padding: 8px;
}

form {
  display: flex;
  border: 1px solid #d2d0d0;
  width: 500px;
  border-radius: 8px;
  height: 40px;
  overflow: hidden;
}
.card {
  box-shadow: 1px 2px 4px #d2d2d2;
  border-radius: 8px;
  overflow: hidden;
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
  background-color: red;
  width: 100px;
}
</style>

<template>
<div class="card">
  <h1 id="header">Comentarios</h1>
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
      message: ""
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
      this.commentStore.postComment(this.message)
    },
  },
}
</script>
