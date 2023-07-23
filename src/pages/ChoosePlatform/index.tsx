import { useState } from 'react'
import { ButtonPlatform } from '../../components/ButtonPlatform'
import {
  BackButton,
  Container,
  ContainerButton,
  ContainerPlatform,
  NextButton,
} from './styles'

export function ChoosePlatform() {
  const [selectedPlatform, setSelectedPlatform] = useState('')

  const isButtonNextDisabled = selectedPlatform.length === 0

  const dataPlatform = [
    {
      text: 'Shopify',
      id: 'shopify',
      value: 'shopify',
      img: 'https://bkreviews.com.br/apps/shopify_icon.png',
    },
    {
      text: 'Cartpanda',
      id: 'cartpanda',
      value: 'cartpanda',
      img: 'https://bkreviews.com.br/apps/cartpanda_icon.png',
    },
    {
      text: 'Nuvemshop',
      id: 'nuvemshop',
      value: 'nuvemshop',
      img: 'https://bkreviews.com.br/apps/nuvemshop_icon.png',
    },
    {
      text: 'Lpqv',
      id: 'lpqv',
      value: 'lpqv',
      img: 'https://bkreviews.com.br/apps/lpqv_icon.png',
    },
    {
      text: 'Yampi',
      id: 'yampi',
      value: 'yampi',
      img: 'https://bkreviews.com.br/apps/yampi_icon.png',
    },
    {
      text: 'Woocommerce',
      id: 'woocommerce',
      value: 'woocommerce',
      img: 'https://bkreviews.com.br/apps/woocommerce_icon.png',
    },
  ]

  return (
    <Container>
      <h2>Qual é a plataforma da sua loja?</h2>

      <ContainerPlatform>
        {dataPlatform.map((platform) => {
          return (
            <ButtonPlatform
              id={platform.id}
              key={platform.id}
              img={platform.img}
              text={platform.text}
              value={platform.value}
              selectedPlatform={() => setSelectedPlatform(platform.value)}
            />
          )
        })}
      </ContainerPlatform>

      <ContainerButton>
        <BackButton to={'/'}>Voltar</BackButton>
        <NextButton to={'/'}>
          <button disabled={isButtonNextDisabled}>
            <strong>Proximo</strong>
          </button>
        </NextButton>
      </ContainerButton>
    </Container>
  )
}
