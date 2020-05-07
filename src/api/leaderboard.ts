import { TeamData } from "../models/TeamData";
import { axiosInstance } from "./axiosInstance";

export function getLeaderboard() {
  return axiosInstance.get<TeamData[]>('/leaderboard/table').then(d => d.data)
}

export function updateLeaderboard(teams: TeamData[]) {
  return axiosInstance.post('/leaderboard/table', teams)
}