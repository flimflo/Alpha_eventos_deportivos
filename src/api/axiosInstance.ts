import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
})

export function setAuthToken(token) {
  axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`
}