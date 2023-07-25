import { Button } from './styles'

interface BackButtonProps {
  url: string
}

export function BackButton({ url }: BackButtonProps) {
  return <Button to={url}>Voltar</Button>
}
