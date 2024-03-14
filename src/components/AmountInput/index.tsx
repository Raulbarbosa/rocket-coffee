import { Minus, Plus } from "phosphor-react"
import { AmountInputContainer } from "./styles"
import { useLocation } from "react-router-dom"
import { useContext, useEffect } from "react"
import { CartContext } from "../../contexts/CartContext"

interface AmountInputProps {
  amount: number | undefined
  id: string
  handler: (param: number) => void
}

export function AmountInput({ amount, id, handler }: AmountInputProps) {
  const { updateCart, cart } = useContext(CartContext);

  const location = useLocation();
  const { pathname } = location;

  function handlerIncrement() {
    if (typeof amount === "number") {
      if (pathname === "/checkout") {
        updateCart({
          id,
          unit: Number(amount + 1)
        })
      } else {
        handler(amount + 1)
      }
    }
  }

  function handlerDecrement() {
    if (typeof amount === "number") {
      if (pathname === "/checkout") {
        if (amount > 0) {
          updateCart({
            id,
            unit: Number(amount - 1)
          })
        }
      } else if (amount > 0)
        handler(amount - 1)
    }
  }

  useEffect(() => { }, [cart, amount])

  return (
    <AmountInputContainer>
      <Minus weight="bold" className="Minus" onClick={handlerDecrement} />
      <span>{amount}</span>
      <Plus weight="bold" className="Plus" onClick={handlerIncrement} />
    </AmountInputContainer>
  )
}