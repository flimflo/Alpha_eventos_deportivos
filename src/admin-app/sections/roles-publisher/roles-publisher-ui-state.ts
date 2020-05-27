import { RoleData } from "../../../models/RoleData"

export interface RolePublisherUiState {
  roles: RoleData[]
  loading: boolean
  error:  boolean
  showSuccess: boolean
}