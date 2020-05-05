import { BehaviorSubject } from 'rxjs';

export class CommentStore {
  constructor(commentClusterId) {
    this.comments = new BehaviorSubject([])
    this.commentClusterId = commentClusterId
    this.getComments(commentClusterId);
  }
  async getComments() {
    const comments = await getComments(this.commentClusterId)
    this.comments.next(comments);
  }
  async postComment({ content }) {
    const newComments = this.comments.value
    newComments.push({ id: 111, content })
    this.comments.next(newComments)
  }
}