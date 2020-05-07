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
  <select v-model="selectedSection">
  <option v-for="item in sections" :key="item">
    {{ item }}
  </option>
</select>
  <div v-if="showApproveToolbar">
    <span>deseas aprobar este comentario?</span>
    <button v-on:click="onApproveClicked"> Si </button>
    <button v-on:click="onClearSelectionClicked"> No </button>
  </div>
  <div v-if="showApproveSuccess">Comentario aprobado con exito</div>
  <ul>
    <li v-for="item in comments" :key="item.id" v-on:click="onCommentSelected(item.id)">
      {{ item.content }} asdfasdf
    </li>
  </ul>

</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { CommentReviewerVM } from './comment-reviewer-vm'
import { CommentReviewerUiState } from './comment-reviewer-ui-state'

interface Data {
  sections: string[]
  selectedSection: string
}

@Component
export default class extends Vue implements CommentReviewerUiState, Data {
  private vm = new CommentReviewerVM()

  comments = []
  loading = false
  error = false
  showApproveToolbar = false
  showApproveSuccess = false

  sections = ["home", "tabla"]
  selectedSection = ""

  created() {
    this.vm.uiState.subscribe(uiState => Object.assign(this, uiState))
    this.selectedSection = "home"
  }

  @Watch("selectedSection")
  onSectionSelected(section: string) {
    this.vm.loadCommentsForSection(section)
  }

  onCommentSelected(commentId) {
    this.vm.commentSelected(commentId)
  }

  onApproveClicked() {
    this.vm.deleteCommentClicked()
  }

  onClearSelectionClicked() {
    this.vm.commentDeletionCanceled()
  }
}
</script>

