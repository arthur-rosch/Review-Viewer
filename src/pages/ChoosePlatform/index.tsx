import { Container, ContainerPlatform } from './styles'
import { ButtonPlatform } from '../../components/ButtonPlatform'

export function ChoosePlatform() {
  return (
    <Container>
      <h2>Qual a plataforma da sua loja?</h2>

      <ContainerPlatform>
        <ButtonPlatform
          text="Shopify"
          id="shopify"
          value="shopify"
          img="https://bkreviews.com.br/apps/shopify_icon.png"
        />
        <ButtonPlatform
          text="Cartpanda"
          id="cartpanda"
          value="cartpanda"
          img="https://bkreviews.com.br/apps/cartpanda_icon.png"
        />
        <ButtonPlatform
          text="Nuvemshop"
          id="nuvemshop"
          value="nuvemshop"
          img="https://bkreviews.com.br/apps/nuvemshop_icon.png"
        />
        <ButtonPlatform
          text="Lpqv"
          id="lpqv"
          value="lpqv"
          img="https://bkreviews.com.br/apps/lpqv_icon.png"
        />
        <ButtonPlatform
          text="Yampi"
          id="yampi"
          value="yampi"
          img="https://bkreviews.com.br/apps/yampi_icon.png"
        />
        <ButtonPlatform
          text="Woocommerce"
          id="woocommerce"
          value="woocommerce"
          img="https://bkreviews.com.br/apps/woocommerce_icon.png"
        />
      </ContainerPlatform>
    </Container>
  )
}
