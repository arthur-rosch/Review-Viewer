import { Container, Comment, ContainerPhotos, Slider } from './styles'
import { XCircle } from 'phosphor-react'

export function Comments() {
  return (
    <Container>
      <button>
        <XCircle size={32} weight="fill" color="#fff" />
      </button>
      <Comment>
        <h2>Leia Domingues</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum cumque
          iusto numquam
        </p>
      </Comment>
      <ContainerPhotos>
        <Slider>
          <img
            src="https://down-lum-br.img.susercontent.com/br-11134103-22100-6vlbd8zcgwiv77.webp"
            alt=""
          />
          <img
            src="https://down-lum-br.img.susercontent.com/br-11134103-22100-6vlbd8zcgwiv77.webp"
            alt=""
          />
          <img
            src="https://down-lum-br.img.susercontent.com/br-11134103-22100-6vlbd8zcgwiv77.webp"
            alt=""
          />
          <img
            src="https://down-lum-br.img.susercontent.com/br-11134103-22100-6vlbd8zcgwiv77.webp"
            alt=""
          />
          <img
            src="https://down-lum-br.img.susercontent.com/br-11134103-22100-6vlbd8zcgwiv77.webp"
            alt=""
          />

          <img
            src="https://down-lum-br.img.susercontent.com/br-11134103-22100-6vlbd8zcgwiv77.webp"
            alt=""
          />
          <img
            src="https://down-lum-br.img.susercontent.com/br-11134103-22100-6vlbd8zcgwiv77.webp"
            alt=""
          />
        </Slider>
      </ContainerPhotos>
    </Container>
  )
}
