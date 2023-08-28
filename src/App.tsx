import { ThemeProvider } from 'styled-components'
import './App.css'
import { PrimaryButton } from './components/PrimaryButton'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { SecondaryButton } from './components/SecondaryButton'
import { AddToCartButton } from './components/AddToCartButton'
import { StatusCart } from './components/StatusCart'
import { AmountInput } from './components/AmountInput'
import { CoffeeCard } from './components/CoffeeCard'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <PrimaryButton />
        <SecondaryButton />
        <AddToCartButton />
        <StatusCart />
        <AmountInput />
        <CoffeeCard />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
