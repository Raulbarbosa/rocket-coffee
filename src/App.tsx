import { ThemeProvider } from 'styled-components'
import './App.css'
import { PrimaryButton } from './components/PrimaryButton'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { RemoveToCartButton } from './components/RemoveToCartButton'
import { AddToCartButton } from './components/AddToCartButton'
import { StatusCart } from './components/StatusCart'
import { AmountInput } from './components/AmountInput'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeAltCard } from './components/CoffeeAltCard'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <PrimaryButton />
        <RemoveToCartButton />
        <AddToCartButton />
        <StatusCart />
        <AmountInput />
        <CoffeeCard />
        <CoffeeAltCard />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
