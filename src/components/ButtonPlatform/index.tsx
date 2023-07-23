import { Container } from './styles'

interface ButtonPlatformProps {
  id: string
  img: string
  text: string
  value: string
  selectedPlatform: (platformValue: string) => void
}

export function ButtonPlatform({
  img,
  value,
  id,
  text,
  selectedPlatform,
}: ButtonPlatformProps) {
  return (
    <Container>
      <label htmlFor={id}>
        <input
          type="radio"
          name="imagem"
          id={id}
          value={value}
          onClick={() => selectedPlatform(value)}
        />
        <img src={img} alt="" />
        <p>{text}</p>
      </label>
    </Container>
  )
}
