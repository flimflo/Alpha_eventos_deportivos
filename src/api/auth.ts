import { axiosInstance } from "./axiosInstance";

interface LoginResponse {
  token: string
}

export function login(email: string, password: string) {
  return axiosInstance.post<LoginResponse>('/auth', { email, password })
    .then(res => res.data.token)
}