import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 4000,
})

export function setAuthToken(token) {
  axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`
}