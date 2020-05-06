import {BehaviorSubject} from 'rxjs'
import { getComments, deleteComment } from '../../api'
import { CommentReviewerUiState } from './comment-reviewer-ui-state'

export class CommentReviewerVM {
  uiState = new BehaviorSubject<CommentReviewerUiState>({
    comments: [],
    error: false,
    loading: false,
    showApproveSuccess: false,
    showApproveToolbar: false
  })

  private selectedCommentId: string|null = null
  private selectedSection: string=""

  loadCommentsForSection(section: string) {
    this.selectedSection = section
    this.ui({ error: false, loading: false })

    getComments(section)
      .then(comments => {
        this.ui({ comments, loading: false })
      })
      .catch(() => this.ui({ error: true, loading: false }))
  }

  commentSelected(commentId: string) {
    this.selectedCommentId = commentId
    this.ui({ showApproveToolbar: true, showApproveSuccess: false })
  }

  commentDeletionCanceled() {
    this.selectedCommentId = null
    this.ui({ error: false, loading: false, showApproveToolbar: false })
  }

  deleteCommentClicked() {
    this.ui({ error: false, loading: false})

    deleteComment(this.selectedCommentId!!)
      .then(() => this.ui({ showApproveSuccess: true, loading: false, showApproveToolbar: false }))
      .then(() => this.loadCommentsForSection(this.selectedSection))
      .catch(() => this.ui({ error: true, loading: false }))
  }

  ui = (state: Partial<CommentReviewerUiState>) =>
    this.uiState.next({ ...this.currentState, ...state })

  get currentState() {
    return this.uiState.value
  }
}