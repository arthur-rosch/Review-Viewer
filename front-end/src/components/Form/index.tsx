import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkbox, Slider } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReviewViewerContext } from '../../context/ReviewViewer'
import { extractIdsFromUrl } from '../../utils/extractIdsFromUrl'
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

const ReviewImportFormSchema = z.object({
  storeLink: z.string(),
  salesPage: z.string(),
  hasImagesOnly: z.boolean(),
  oneImagePerReview: z.boolean(),
})

export type ReviewImportValues = z.infer<typeof ReviewImportFormSchema>

export function ReviewImportForm() {
  const navigate = useNavigate()
  const [genderDivision, setGenderDivision] = useState(50)
  const [reviewQuantity, setReviewQuantity] = useState(50)

  const { handleSetItemId, handleSetShopeId } = useContext(ReviewViewerContext)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewImportValues>({
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
    const validationResult = ReviewImportFormSchema.safeParse(dataForm)

    if (validationResult.success) {
      const props = extractIdsFromUrl(dataForm.storeLink)

      handleSetItemId(props?.itemId || '')
      handleSetShopeId(props?.shopId || '')

      navigate('/ChoosePlatform')
    } else {
      console.log('Erro de validação:', validationResult.error)
    }
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
        <Input type="text" {...register('storeLink')} required />
        {errors.storeLink && (
          <span style={{ color: 'red' }}>{errors.storeLink.message}</span>
        )}
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
        <Input type="text" {...register('salesPage')} required />
      </InputSalesPage>

      <InputReviewQuantity>
        Qtd.Reviews
        <div>
          <Slider
            defaultValue={50}
            value={reviewQuantity}
            aria-label="Temperature"
            onChange={(e) => {
              const target = e.target as HTMLInputElement
              setReviewQuantity(Number(target.value))
            }}
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
          onChange={(e) => {
            const target = e.target as HTMLInputElement
            setGenderDivision(Number(target.value))
          }}
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

      <SubmitButton>
        <strong>Importar</strong>
      </SubmitButton>
    </Form>
  )
}
