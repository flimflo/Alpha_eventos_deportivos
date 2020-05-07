import { TeamData } from "../../../models/TeamData";

export interface LeaderBoardUiState {
  table: TeamData[]
  loading: boolean
  error:  boolean
  showSuccess: boolean
}