import { axiosInstance } from './axiosInstance'
import { Card } from '../models/NewsArticle'

export async function getBestOfLeague() {
  return (await axiosInstance.get<Card[]>(`/best`)).data
}

type BestOfLeagueRequest = {
  into: Card[]
}
export async function postBestOfLeague(info: Card[]) {
  return (await axiosInstance.post(`/best`, { info }))
}