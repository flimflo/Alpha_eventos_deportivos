export interface CommentItem {
  content: string,
  id: string,
  publishedAt: string,
}

export interface CommentReviewerUiState {
  comments: CommentItem[],
  loading: boolean,
  error: boolean,
  showApproveToolbar: boolean,
  showApproveSuccess: boolean,
}