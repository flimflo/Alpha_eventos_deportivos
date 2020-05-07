import { CommentItem } from "../../../models/CommentItem";

export interface CommentReviewerUiState {
  comments: CommentItem[],
  loading: boolean,
  error: boolean,
  showApproveToolbar: boolean,
  showApproveSuccess: boolean,
}