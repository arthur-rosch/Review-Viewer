import { RoutesComponent } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles, PagesWrapper } from './styles/global'
import { ReviewViewerContextProvider } from './context/ReviewViewer'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <PagesWrapper>
          <ReviewViewerContextProvider>
            <RoutesComponent />
          </ReviewViewerContextProvider>
        </PagesWrapper>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
