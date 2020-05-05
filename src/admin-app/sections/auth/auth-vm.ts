import {BehaviorSubject} from 'rxjs'
import { AuthService} from '../../data/services/AuthService'
import { UiState } from './auth-ui-state'

export class AuthVM {
  private static initialState: UiState = {
    error: false,
    loading: false,
  }

  private static errorState: UiState = {
    error: true,
    loading: false,
  }

  private static loadingState: UiState = {
    error: false,
    loading: true,
  }

  uiState = new BehaviorSubject<UiState>(AuthVM.initialState)

  login = (user: string, password: string) => {
    this.ui(AuthVM.loadingState)

    AuthService.default.login({ user, password })
      .then(() => ({ loading: false, error: false }))
      .catch(() => AuthVM.errorState)
      .then(this.ui)
  }

  ui = state => this.uiState.next(state)
}