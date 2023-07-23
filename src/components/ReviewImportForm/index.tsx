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
import { Checkbox, Slider } from '@mui/material'
import { extractIdsFromUrl } from '../../utils/extractIdsFromUrl'

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

    const props = extractIdsFromUrl(data.storeLink)
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
          <Checkbox
            size="small"
            defaultChecked
            {...register('hasImagesOnly')}
            sx={{
              color: '#ffffff',
              '&.Mui-checked': {
                color: '#ffffff',
              },
            }}
          />
          Somente com Imagens
        </label>

        <label>
          <Checkbox
            size="small"
            defaultChecked
            {...register('oneImagePerReview')}
            sx={{
              color: '#ffffff',
              '&.Mui-checked': {
                color: '#ffffff',
              },
            }}
          />
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
          <Slider
            defaultValue={30}
            value={reviewQuantity}
            aria-label="Temperature"
            onChange={(e) => setReviewQuantity(Number(e.target?.value))}
            sx={{
              color: '#ffffff',
            }}
          />
          <p>{reviewQuantity}</p>
        </div>
      </InputReviewQuantity>

      <InputGenderDivision>
        Distribuição de gêneros
        <Slider
          defaultValue={30}
          value={genderDivision}
          aria-label="Temperature"
          onChange={(e) => setGenderDivision(Number(e.target?.value))}
          sx={{
            color: '#ffffff',
          }}
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
