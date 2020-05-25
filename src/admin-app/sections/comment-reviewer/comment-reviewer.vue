<style scoped>
#header {
  padding: 8px;
}

.card {
  background-color: #FFFFFF;
  max-width: 800px;
  margin: 32px 24px;
  box-shadow: 1px 2px 4px #383838;
  border-radius: 2px;
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

.comment-list {
  list-style: none;
  padding: 0;
}

.comment {
  padding: 8px;
  transition: background-color .1s ease-in;
  cursor: pointer;
}

.comment:hover {
  background-color: #efefef;
}

#toolbar {
  background-color: #263238;
  display: flex;
  justify-content: flex-end;
  height: 48px;
}

#approval-buttons {
  flex: 1 0 auto;
}

#modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000061;
}

#modal {
  position: relative;
  background-color: #FFFFFF;
  max-width: 400px;
  margin: 32px 24px;
  padding: 30px;
  box-shadow: 1px 2px 4px #383838;
  border-radius: 2px;
  overflow: hidden;
}

</style>

<template>
<div class="card">
  <div id="modal-overlay"  v-if="showApproveToolbar">
       <div id="modal">
          <p>deseas aprobar este comentario?</p>
          <button v-on:click="onApproveClicked"> Si </button>
          <button v-on:click="onClearSelectionClicked"> No </button>
        </div>
  </div>
  <div id="toolbar">
    <select v-model="selectedSection">
      <option v-for="item in sections" :key="item">
        {{ item }}
      </option>
    </select>
  </div>

  <div v-if="showApproveSuccess">Comentario aprobado con exito</div>
  <ul class="comment-list">
    <li class="comment"
      v-for="item in comments"
      :key="item.id"
      v-on:click="onCommentSelected(item.id)">
      <span>{{ item.publishedAt }}: {{ item.content }}</span>
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

  sections = ["home", "tabla", "lo-mejor"]
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

