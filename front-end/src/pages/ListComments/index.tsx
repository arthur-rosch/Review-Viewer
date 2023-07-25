import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import {
  Container,
  ContainerButtons,
  ContainerStar,
  Header,
  MediaStar,
  Star,
} from './styles'
import { ReviewViewerContext } from '../../context/ReviewViewer'
import { Comments } from '../../components/Comments'
import { Stars } from '../../components/Stars'

interface RatingsVideos {
  url?: string
  cover?: string
  duration?: number
}

interface Ratings {
  comment: string
  images: string[]
  rating_star: number
  videos?: RatingsVideos
  author_username: string
}

export function ListComments() {
  const [ratings, setRatings] = useState<Ratings[]>([])
  const { itemId, shopeId } = useContext(ReviewViewerContext)

  const urlGetImage = 'https://down-lum-br.img.susercontent.com/'

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/get_ratings/${shopeId}/${itemId}`)
      .then((response) => {
        const dataRatings = response.data.data.ratings

        setRatings(dataRatings)
      })
  }, [itemId, shopeId, ratings])

  return (
    <Container>
      <Header>
        <ContainerStar>
          <p>Média de estrelas</p>
          <Star>
            <Stars number={1} />
            <MediaStar>4,6</MediaStar>
          </Star>
        </ContainerStar>
        <ContainerButtons>
          <button>
            <strong>Baixar csv</strong>
          </button>
          <button>
            <strong>Apagar imagens</strong>
          </button>
        </ContainerButtons>
      </Header>
      <Comments />
    </Container>
  )
}
