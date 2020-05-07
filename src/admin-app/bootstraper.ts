import { AuthService } from "./data/services/AuthService"
import { setAuthToken } from "../api/axiosInstance"

AuthService.default.authToken.subscribe(token => {
  if (token) {
    setAuthToken(token)
  }
})