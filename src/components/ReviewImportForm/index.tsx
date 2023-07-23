import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  Input,
  SubmitButton,
  InputCheckBox,
  InputStoreLink,
  InputSalesPage,
  InputGenderDivision,
  InputReviewQuantity,
} from './styles'
import { useState } from 'react'

const ReviewImportFormSchema = z.object({
  storeLink: z.string(),
  salesPage: z.string(),
  hasImagesOnly: z.boolean(),
  oneImagePerReview: z.boolean(),
})

export type ReviewImportValues = z.infer<typeof ReviewImportFormSchema>

export function ReviewImportForm() {
  const [reviewQuantity, setReviewQuantity] = useState(0)
  const [genderDivision, setGenderDivision] = useState(0)

  const { reset, register, handleSubmit } = useForm<ReviewImportValues>({
    resolver: zodResolver(ReviewImportFormSchema),
  })

  function onSubmit(data: ReviewImportValues) {
    const dataForm = {
      ...data,
      reviewQuantity,
      genderDivision,
      numMen: genderDivision,
      numWomen: 100 - genderDivision,
    }
    console.log(dataForm)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <p>
        Bem Vindo ao <br />
        <strong>Importador de Reviews</strong>
      </p>

      <InputStoreLink>
        Link da shoppe
        <Input type="text" {...register('storeLink')} />
      </InputStoreLink>

      <InputCheckBox>
        <label>
          <input type="checkbox" {...register('hasImagesOnly')} />
          Somente com Imagens
        </label>

        <label>
          <input type="checkbox" {...register('oneImagePerReview')} />
          Uma Imagem por Review
        </label>
      </InputCheckBox>

      <InputSalesPage>
        Pagina de vendas
        <Input type="text" {...register('salesPage')} />
      </InputSalesPage>

      <InputReviewQuantity>
        Qtd.Reviews
        <div>
          <input
            min="0"
            max="100"
            type="range"
            value={reviewQuantity}
            onChange={(e) => setReviewQuantity(Number(e.target.value))}
          />
          <p>{reviewQuantity}</p>
        </div>
      </InputReviewQuantity>

      <InputGenderDivision>
        Distribuição de gêneros
        <input
          min="0"
          max="100"
          type="range"
          value={genderDivision}
          onChange={(e) => setGenderDivision(Number(e.target.value))}
        />
        <div>
          <span>
            {genderDivision}
            <br />
            Homens
          </span>
          <span>
            {100 - genderDivision}
            <br />
            Mulheres
          </span>
        </div>
      </InputGenderDivision>

      <SubmitButton>Importar</SubmitButton>
    </Form>
  )
}
