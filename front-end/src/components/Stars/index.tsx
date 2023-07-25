import { Star } from 'phosphor-react'

interface StarsProps {
  number: number
}

export function Stars({ number }: StarsProps) {
  const starsArray = new Array(5).fill(null)

  return (
    <>
      {starsArray.map((_, index) => (
        <Star key={index} size={22} weight={index < number ? 'fill' : 'thin'} />
      ))}
    </>
  )
}
