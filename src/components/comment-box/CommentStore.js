import { BehaviorSubject } from 'rxjs';

function postComment() {
  return Promise.resolve()
}

function getComments(commentClusterId) {
  return Promise.resolve(
    [{ id: 123, content: 'MyComments'+commentClusterId, date: '1588464325856' },
     { id: 123, content: 'MyComments 2'+commentClusterId, date: '1588464025856' },
     { id: 123, content: 'MyComments 3'+commentClusterId, date: '1588414325856' },
     { id: 123, content: 'MyComments 3'+commentClusterId, date: '1588414325856' }]
  )
}

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