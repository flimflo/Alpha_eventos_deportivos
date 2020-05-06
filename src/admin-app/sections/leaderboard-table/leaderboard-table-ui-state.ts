interface TeamData {
  teamName: string,
  goalsAgainst: number,
  goalsScored: number,
  points: number
}

export interface LeaderBoardUiState {
  table: TeamData[]
  loading: boolean
  error:  boolean
  showSuccess: boolean
}