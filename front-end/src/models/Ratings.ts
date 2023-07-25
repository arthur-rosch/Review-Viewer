import { RatingsVideos } from './RatingsVideos'

export interface Ratings {
  comment: string
  images: string[]
  rating_star: number
  videos?: RatingsVideos[]
  author_username: string
}
