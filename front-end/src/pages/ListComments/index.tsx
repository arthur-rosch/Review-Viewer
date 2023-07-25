import { api } from '../../service/api'
import { Stars } from '../../components/Stars'
import { Ratings } from '../../models/Ratings'
import { Comments } from '../../components/Comments'
import { NextButton } from '../../components/NextButton'
import { BackButton } from '../../components/BackButton'
import { ReviewViewerContext } from '../../context/ReviewViewer'
import { useContext, useEffect, useState, useCallback } from 'react'
import { calculateRatingsAverage } from '../../utils/calculateRatingsAverage'
import {
  Star,
  Header,
  Container,
  ListComment,
  ContainerStar,
  AverageOfStars,
  ContainerNavigationButton,
  ContainerCSVDownloadAndDeleteButton,
} from './styles'

export function ListComments() {
  const [stars, setStars] = useState(0)
  const [ratings, setRatings] = useState<Ratings[]>([])
  const { itemId, shopeId } = useContext(ReviewViewerContext)

  const getRatingsByShoppe = useCallback(() => {
    api.get(`/get_ratings/${shopeId}/${itemId}`).then((response) => {
      const dataRatings = response.data.data.ratings

      setRatings(dataRatings)
    })
  }, [itemId, shopeId])

  function handleRemoveComment(index: number) {
    if (index >= 0 && index < ratings.length) {
      const newRatings = [...ratings]

      newRatings.splice(index, 1)

      setRatings(newRatings)
      setStars(calculateRatingsAverage(ratings))
    }
  }

  useEffect(() => {
    getRatingsByShoppe()
  }, [getRatingsByShoppe])

  return (
    <Container>
      <Header>
        <ContainerStar>
          <p>Média de estrelas</p>
          <Star>
            <Stars number={calculateRatingsAverage(ratings)} />
            <AverageOfStars>{calculateRatingsAverage(ratings)}</AverageOfStars>
          </Star>
        </ContainerStar>
        <ContainerCSVDownloadAndDeleteButton>
          <button>
            <strong>Baixar csv</strong>
          </button>
          <button>
            <strong>Apagar imagens</strong>
          </button>
        </ContainerCSVDownloadAndDeleteButton>
      </Header>
      <ListComment>
        {ratings.map((item, index) => {
          return (
            <>
              <Comments
                key={index}
                index={index}
                images={item.images}
                comment={item.comment}
                rating_star={item.rating_star}
                author_username={item.author_username}
                handleRemoveComment={handleRemoveComment}
              />
            </>
          )
        })}
      </ListComment>
      <ContainerNavigationButton>
        <BackButton url="/ChoosePlatform" />
        <NextButton text={'Enviar'} isDisabled={false} url={'/ListComments'} />
      </ContainerNavigationButton>
    </Container>
  )
}
