import { ReactNode, createContext, useReducer } from "react"
import { Coffee } from "../interface"
import { cartReducer } from "../reducers/cart/reducer"
import { incrementCoffeeAction } from "../reducers/cart/actions"

interface CartContextType {
  cart: Coffee[]

  addCoffee: (data: Coffee) => void
  // removeCoffee: () => void
  // cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cart: [] },
    (initialState) => {
      return initialState
    }

  )

  const { cart } = cartState;

  function addCoffee(data: Coffee) {
    dispatch(incrementCoffeeAction(data))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addCoffee
    }}
    >
      {children}
    </CartContext.Provider>
  )
}