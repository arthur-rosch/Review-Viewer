import { Button } from './styles'

interface NextButtonProps {
  url: string
  text: string
  isDisabled: boolean
}

export function NextButton({ isDisabled, text, url }: NextButtonProps) {
  return (
    <Button to={url}>
      <button disabled={isDisabled}>{text}</button>
    </Button>
  )
}
