import { ReactNode, createContext, useEffect, useReducer } from "react"
import { updateCartAction } from "../reducers/cart/actions"
import { cartReducer } from "../reducers/cart/reducer"
import { CartItem } from "../interface"

interface CartContextType {
  cart: CartItem[]

  updateCart: (item: CartItem) => void

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

  function updateCart(data: CartItem) {
    dispatch(updateCartAction(data))
  }

  useEffect(() => {
  }, [cartState])

  return (
    <CartContext.Provider value={{
      cart,
      updateCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}