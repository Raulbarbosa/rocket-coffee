import { Minus, Plus } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AmountInputContainer } from "./styles"

interface AmountInputProps {
  identifier: string
}

export function AmountInput({ identifier }: AmountInputProps) {
  const { cart, updateCart } = useContext(CartContext);

  const item = cart.find(item => item.id === identifier);

  const amount = item ? item.unit : 0;

  function handlerIncrementAmount() {
    if (typeof amount === "number") {
      updateCart({
        id: identifier,
        unit: amount + 1
      })
    }
  }

  function handlerDecrementAmount() {
    if (typeof amount === "number") {
      if (amount > 0) {
        updateCart({
          id: identifier,
          unit: amount - 1
        })
      }
    }
  }

  return (
    <AmountInputContainer>
      <Minus weight="bold" className="Minus" onClick={handlerDecrementAmount} />
      <span>{amount}</span>
      <Plus weight="bold" className="Plus" onClick={handlerIncrementAmount} />
    </AmountInputContainer>
  )
}