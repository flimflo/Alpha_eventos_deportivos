import { CommentItem } from '../sections/comment-reviewer/comment-reviewer-ui-state'

//GET COMMENTS USERS endpoint: http://localhost:8080/comments/:section
//POST COMMENTS USERS endpoint: http://localhost:8080/comments/:section
//GET COMMENTS ADMIN endpoint: http://localhost:8080/commentsAdmin/:section
//UPDATE COMMENTS ADMIN endpoint: http://localhost:8080/commentsAdmin/:id
//DELETE COMMENTS ADMIN endpoint: http://localhost:8080/commentsAdmin/:id
export async function getComments(section: string) {
  const comments: CommentItem[] = [{
    content: 'asdf',
    id: '1',
    publishedAt: 'ayer'
  }]

  return comments
}

export function postComment() {
  return Promise.resolve()
}

export function deleteComment(commentId: string) {
  return Promise.resolve()
}