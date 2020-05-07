import { axiosInstance } from './axiosInstance'

export function postComment(section: string) {
  return axiosInstance.post(`/comments/${section}`)
}

type Comment = {
  id: string
  approved: boolean,
  content: string,
  section: string,
  creation_date: string
}

export function getComments(section: string) {
  return axiosInstance.get<Comment[]>(`/comments/${section}`)
}

export function getAllComments(section: string) {
  return axiosInstance.get<Comment[]>(`/comments/Admin/${section}`)
}

export function setCommentApproval(commentId: string, approved: boolean) {
  return axiosInstance.patch(`/comments/Admin/${commentId}`)
}