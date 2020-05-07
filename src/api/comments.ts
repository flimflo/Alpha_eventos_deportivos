import { axiosInstance } from './axiosInstance'

export function postComment(section: string, content: string) {
  return axiosInstance.post(`/comments/${section}`, {
    content
  })
}

type Comment = {
  _id: string
  approved: boolean,
  content: string,
  section: string,
  creation_date: string
}

export async function getComments(section: string) {
  return (await axiosInstance.get<Comment[]>(`/comments/${section}`)).data
}

export function getAllComments(section: string) {
  return axiosInstance.get<Comment[]>(`/comments/Admin/${section}`)
}

export function setCommentApproval(commentId: string, approved: boolean) {
  return axiosInstance.patch(`/comments/Admin/${commentId}`)
}