import { LeaderBoardUiState } from "./leaderboard-table-ui-state"
import { BehaviorSubject } from "rxjs"
import { updateLeaderboard } from "../../../api"

export class LeaderBoardVM {
  uiState = new BehaviorSubject<LeaderBoardUiState>(LeaderBoardVM.initialState)

  appendTeam(teamName: string, goalsAgainst: number, goalsScored: number, points: number) {
    this.currentState.table.push({
      teamName,
      goalsAgainst,
      goalsScored,
      points,
    })

    this.ui(this.currentState)
  }

  submit() {
    this.ui({ loading: true, error: false, showSuccess: false })

    updateLeaderboard(this.currentState.table)
      .then(() => this.ui({ showSuccess: true, loading: false }))
      .catch(() => this.ui({ error: true, loading: false }))

  }

  ui = (state: Partial<LeaderBoardUiState>) =>
    this.uiState.next({ ...this.currentState, ...state })

  get currentState() {
    return this.uiState.value
  }

  static initialState: LeaderBoardUiState = {
    table: [],
    loading: false,
    error:  false,
    showSuccess: false,
  }
}
