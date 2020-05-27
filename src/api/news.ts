import { axiosInstance } from './axiosInstance'
import { NewsArticle } from '../models/NewsArticle'
import * as moment from 'moment'

type NewsResponse = {
  articles: NewsArticle[]
}
export async function getNews() {
  return (await axiosInstance.get<NewsResponse>(`/news`)).data.articles.map(x => ({ ...x, date: moment(x.date).locale('es').fromNow(),}))
}


type PostNewArticleBody = {
  title: string
  image_url: string
  content: string
}

export async function postNewArticle(body: PostNewArticleBody) {
  return (await axiosInstance.post('/news', body))
}
