import { RoutesComponent } from './routes'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <RoutesComponent />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
