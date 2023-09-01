import { Minus, Plus } from "phosphor-react"
import { AmountInputContainer } from "./styles"

export function AmountInput() {
  return (
    <AmountInputContainer>
      <Minus weight="bold" className="Minus" />
      <span>0</span>
      <Plus weight="bold" className="Plus" />
    </AmountInputContainer>
  )
}