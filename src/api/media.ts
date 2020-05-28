import { axiosInstance } from './axiosInstance'
import { Media } from '../models/Media'
import * as moment from 'moment'

type PhotosResponse = {
  mediaPhotos: Media[]
}
export async function getMediaPhoto() {
  return (await axiosInstance.get<PhotosResponse>(`/media/photos`)).data.mediaPhotos.map(x => ({ ...x, date: moment(x.date).locale('es').fromNow(),}))
}

type VideosResponse = {
  mediaVideos: Media[]
}
export async function getMediaVideo() {
  return (await axiosInstance.get<VideosResponse>(`/media/videos`)).data.mediaVideos.map(x => ({ ...x, date: moment(x.date).locale('es').fromNow(),}))
}

type PostNewMedia = {
  title: string
  image_url: string
  media_type: string
  content: string
}

export async function postMedia(body: PostNewMedia) {
  return (await axiosInstance.post('/media', body))
}
