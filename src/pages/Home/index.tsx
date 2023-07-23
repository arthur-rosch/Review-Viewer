import { useState } from 'react'
import { Switch } from '@mui/material'
import { ArrowLeft } from 'phosphor-react'
import {
  Form,
  Input,
  Header,
  Container,
  SubmitButton,
  InputCheckBox,
  InputStoreLink,
  InputSalesPage,
  InputGenderDivision,
  InputReviewQuantity,
} from './styles'

export function Home() {
  const [numMen, setNumMen] = useState('50')
  const [numWomen, setNumWomen] = useState(50)
  const [reviewQuantity, setReviewQuantity] = useState('50')
  const [genderDivision, setGenderDivision] = useState('50')

  return (
    <Container>
      <Header>
        <div>
          <button>
            <ArrowLeft size={32} weight="light" color="#8c9494" />
          </button>
          <p>Olá, ARTHUR ROSCH</p>
        </div>
        <Switch defaultChecked />
      </Header>

      <Form>
        <p>
          Bem Vindo ao <br />
          <strong>Importador de Reviews</strong>
        </p>

        <InputStoreLink htmlFor="">
          Link da shoppe
          <Input type="text" />
        </InputStoreLink>

        <InputCheckBox>
          <label>
            <input type="checkbox" />
            Somente com Imagens
          </label>

          <label>
            <input type="checkbox" />
            Uma Imagem por Review
          </label>
        </InputCheckBox>

        <InputSalesPage htmlFor="">
          Pagina de vendas
          <Input type="text" min="0" max="100" />
        </InputSalesPage>

        <InputReviewQuantity htmlFor="">
          Qtd.Reviews
          <div>
            <input
              min="0"
              max="100"
              type="range"
              value={reviewQuantity}
              onChange={(e) => setReviewQuantity(e.target.value)}
            />
            <p>{reviewQuantity}</p>
          </div>
        </InputReviewQuantity>

        <InputGenderDivision htmlFor="">
          Distribuição de gêneros
          <input
            min="0"
            max="100"
            type="range"
            value={genderDivision}
            onChange={(e) => {
              setNumMen(e.target.value)
              setGenderDivision(e.target.value)
              setNumWomen(100 - Number(e.target.value))
            }}
          />
          <div>
            <span>
              {numMen}
              <br />
              Homens
            </span>
            <span>
              {numWomen}
              <br />
              Mulheres
            </span>
          </div>
        </InputGenderDivision>

        <SubmitButton>Importar</SubmitButton>
      </Form>
    </Container>
  )
}
