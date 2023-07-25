import { Switch } from '@mui/material'
import { ArrowLeft } from 'phosphor-react'
import { Header, Container } from './styles'
import { ReviewImportForm } from '../../components/Form'

export function Form() {
  return (
    <Container>
      <Header>
        <div>
          <button>
            <ArrowLeft size={32} weight="light" color="#616368" />
          </button>
          <p>Olá, ARTHUR ROSCH</p>
        </div>
        <Switch
          defaultChecked
          sx={{
            color: '#ffffff',
            '&.Mui-checked': {
              color: '#ffffff',
            },
          }}
        />
      </Header>

      <ReviewImportForm />
    </Container>
  )
}
