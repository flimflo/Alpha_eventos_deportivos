<style scoped>
#header {
  padding: 8px;
}

.card {
  box-shadow: 1px 2px 4px #d2d2d2;
  border-radius: 8px;
  overflow: hidden;
}

input {
  display: block;
  padding: 8px;
  border: 1px solid #d2d0d0;
  border-radius: 2px;
  margin: 10px 0;
  flex-grow: 1;
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

</div>
</template>

<script>
import { CommentReviewerVM } from './comment-reviewer-vm'
export default {
  data: function () {
    return {
      loading: false,
      error: false,
      password: '',
      email: '',
    }
  },
  created: function() {
    this.vm = new CommentReviewerVM()
    this.vm.uiState.subscribe(uiState => Object.assign(this, uiState))
  },
  methods: {
    login: function() {
      this.vm.login({ email: this.email, password: this.password })
    },
  },
}
</script>

