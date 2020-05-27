import { BehaviorSubject } from "rxjs"
import { updateRoles } from "../../../api"
import { RolePublisherUiState } from "./roles-publisher-ui-state"

export class RolesPublisherVM {
  uiState = new BehaviorSubject<RolePublisherUiState>(RolesPublisherVM.initialState)

  appendTeam(equipoA: string, equipoB: string, cancha: string, hora: string) {
    this.currentState.roles.push({
      equipoA,
      equipoB,
      cancha,
      hora,
    })

    this.ui(this.currentState)
  }

  submit(date) {
    this.ui({ loading: true, error: false, showSuccess: false })

    updateRoles(this.currentState.roles, date)
      .then(() => this.ui({ showSuccess: true, loading: false }))
      .catch(() => this.ui({ error: true, loading: false }))

  }

  ui = (state: Partial<RolePublisherUiState>) =>
    this.uiState.next({ ...this.currentState, ...state })

  get currentState() {
    return this.uiState.value
  }

  static initialState: RolePublisherUiState = {
    roles: [],
    loading: false,
    error:  false,
    showSuccess: false,
  }
}
