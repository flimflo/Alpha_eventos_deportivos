import {BehaviorSubject} from 'rxjs'
import {defaultAuthService} from '../../data/services/AuthService'

function UiState(state = { loading: false, error: false }) {
  return state
}

export class CommentReviewerVM {
  constructor() {
    this.uiState = new BehaviorSubject(
      UiState({
        loading: false,
        error: false
      }))
  }

  login({ user, password }) {
    this.ui(UiState({ loading: true }))

    AuthService.login({ user, password })
      .then(() =>
        this.ui(UiState({ loading: false, error: false }))
      )
      .catch(() =>
        this.ui(UiState({ loading: false, error: true }))
      )
  }

  ui(state) {
    this.uiState.next(state)
  }
}