import { Stars } from '../Stars'
import { XCircle } from 'phosphor-react'
import { Ratings } from '../../models/Ratings'
import { Container, Comment, ContainerPhotos, Slider } from './styles'

interface CommentsProps extends Ratings {
  index: number
  handleRemoveComment: (index: number) => void
}

export function Comments({
  index,
  images,
  comment,
  rating_star,
  author_username,
  handleRemoveComment,
}: CommentsProps) {
  return (
    <Container>
      <button onClick={() => handleRemoveComment(index)}>
        <XCircle size={32} weight="fill" color="#fff" />
      </button>
      <Comment>
        <h2>{author_username}</h2>
        <p>{comment}</p>
        <Stars number={rating_star} />
      </Comment>
      <ContainerPhotos>
        <Slider>
          {images.map((img) => {
            return (
              <>
                <img
                  alt=""
                  key={img}
                  src={`https://down-lum-br.img.susercontent.com/${img}.webp`}
                />
              </>
            )
          })}
        </Slider>
      </ContainerPhotos>
    </Container>
  )
}
