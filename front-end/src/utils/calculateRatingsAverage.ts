import { Ratings } from '../models/Ratings'

export function calculateRatingsAverage(ratings: Ratings[]): number {
  if (ratings.length === 0) {
    return 0
  }

  const totalRatings = ratings.length
  let sumStars = 0

  for (const rating of ratings) {
    sumStars += rating.rating_star
  }

  const average = Math.round(sumStars / totalRatings)

  return average
}
