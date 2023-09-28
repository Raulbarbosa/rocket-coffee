import { ReactNode, createContext, useEffect, useReducer, useState } from "react"
import { updateCartAction } from "../reducers/cart/actions"
import { cartReducer } from "../reducers/cart/reducer"
import { CartItem } from "../interface"
import { coffees } from "../coffee"

interface CartContextType {
  cart: CartItem[],
  totalBrute: number,
  tax: number,
  total: number,

  updateCart: (item: CartItem) => void

  // removeCoffee: () => void
  // cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [totalBrute, setTotalBrute] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
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

  const coffeesOnCart = cart.map((coffee) => {
    if (coffee && coffee.unit !== undefined && coffee.unit > 0) {
      const coffeeValue = coffees.find(item => {
        if (item.id === coffee.id) {
          return item.price
        }
      })
      const updatedCoffee = { ...coffee, price: coffeeValue?.price };
      return updatedCoffee
    }
  })

  useEffect(() => {

    const localTotalBrute = coffeesOnCart.reduce((total: number, coffee) => {
      return total + Number(coffee?.price)
    }, 0)
    setTotalBrute(localTotalBrute)

    const localTax = totalBrute * 0.117
    setTax(localTax)

    const localTotal = totalBrute + tax;
    setTotal(localTotal)

  }, [cartState, totalBrute, tax, coffeesOnCart, cart, total])

  return (
    <CartContext.Provider value={{
      cart,
      updateCart,
      totalBrute,
      tax,
      total
    }}
    >
      {children}
    </CartContext.Provider>
  )
}