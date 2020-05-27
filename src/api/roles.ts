import { axiosInstance } from "./axiosInstance";
import { RoleData } from "../models/RoleData";

type GetRolesResponse= {
  roles: RoleData[],
  date: String
}
export function getRoles() {
  return axiosInstance.get<GetRolesResponse>('/weeklymatch').then(d => d.data)
}

export function updateRoles(roles: RoleData[], date: string) {
  return axiosInstance.post('/weeklymatch', {
    roles,
    date
   })
}