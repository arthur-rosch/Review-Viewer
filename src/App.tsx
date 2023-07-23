import { RoutesComponent } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles, PagesWrapper } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <PagesWrapper>
          <RoutesComponent />
        </PagesWrapper>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
