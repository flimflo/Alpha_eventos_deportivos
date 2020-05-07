import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 4000,
})

export function setAuthToken(token) {
  axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`
}