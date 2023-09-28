import { Minus, Plus } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AmountInputContainer } from "./styles"
import { useLocation } from "react-router-dom"

interface AmountInputProps {
  identifier: string | undefined
}

export function AmountInput({ identifier }: AmountInputProps) {
  const { cart, updateCart } = useContext(CartContext);
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);

  const item = cart.find(item => item.id === identifier);

  const amount = item ? item.unit : 0;

  function handlerIncrementAmount() {
    console.log("Increment");

    if (typeof amount === "number") {
      updateCart({
        id: identifier,
        unit: amount + 1
      })
    }
  }

  function handlerDecrementAmount() {
    if (typeof amount === "number") {
      if (amount > 1) {
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