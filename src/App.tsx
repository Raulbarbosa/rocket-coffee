import { ThemeProvider } from 'styled-components'
import './App.css'
import { PrimaryButton } from './components/PrimaryButton'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { SecondaryButton } from './components/SecondaryButton'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <PrimaryButton />
        <SecondaryButton />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
