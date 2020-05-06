import { delay } from "./auth";
import { TeamData } from "../sections/leaderboard-table/leaderboard-table-ui-state";

export function getLeaderboard() {
  return Promise.resolve([])
}

export async function updateLeaderboard(teams: TeamData[]) {
  await delay(1000);
  return Promise.resolve()
}