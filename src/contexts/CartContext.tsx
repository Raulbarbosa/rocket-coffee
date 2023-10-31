import { ReactNode, createContext, useEffect, useReducer, useState } from "react"
import { updateCartAction } from "../reducers/cart/actions"
import { cartReducer } from "../reducers/cart/reducer"
import { CartItem } from "../interface"
import { coffees } from "../coffee"

interface CartContextType {
  cart: CartItem[],
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
    calculateValue()
  }

  const coffeesOnCart = cart.map((coffee) => {
    if (coffee && coffee.unit !== undefined && coffee.unit >= 0) {
      const coffeeValue = coffees.find(item => {
        if (item.id === coffee.id) {
          return item.price
        }
      })
      const updatedCoffee = { ...coffee, price: coffeeValue?.price };
      return updatedCoffee
    }
  })

  function calculateValue() {
    const localTotal = coffeesOnCart.reduce((total: number, coffee) => {
      return total + Number(coffee?.price) * Number(coffee?.unit)
    }, 0);

    setTotal(localTotal);
  }

  useEffect(() => {
    function handleUpdateTotal() {
      calculateValue()
    }
    handleUpdateTotal()
  }, [coffeesOnCart, cart, cartState, setTotal]);

  return (
    <CartContext.Provider value={{
      cart,
      updateCart,
      total
    }}
    >
      {children}
    </CartContext.Provider>
  )
}