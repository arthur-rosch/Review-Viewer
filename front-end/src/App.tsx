import { RoutesComponent } from './routes'
import { MemoryRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles, PagesWrapper } from './styles/global'
import { ReviewViewerContextProvider } from './context/ReviewViewer'

function App() {
  return (
    <Router>
       <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <PagesWrapper>
          <ReviewViewerContextProvider>
            <RoutesComponent />
          </ReviewViewerContextProvider>
        </PagesWrapper>
    </ThemeProvider>
    </Router>
   
  )
}

export default App
