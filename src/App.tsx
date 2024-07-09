import { AppRoutes } from './routes'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  )
}

export default App
