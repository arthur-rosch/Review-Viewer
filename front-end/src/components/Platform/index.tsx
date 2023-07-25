import { Container } from './styles'

interface PlatformProps {
  id: string
  img: string
  text: string
  value: string
  selectedPlatform: (platformValue: string) => void
}

export function Platform({
  img,
  value,
  id,
  text,
  selectedPlatform,
}: PlatformProps) {
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
