import { Container } from './styles'

interface ButtonPlatformProps {
  id: string
  img: string
  text: string
  value: string
}

export function ButtonPlatform({ img, value, id, text }: ButtonPlatformProps) {
  return (
    <Container>
      <label htmlFor={id}>
        <input type="radio" name="imagem" id={id} value={value} />
        <img src={img} alt="" />
        <p>{text}</p>
      </label>
    </Container>
  )
}
