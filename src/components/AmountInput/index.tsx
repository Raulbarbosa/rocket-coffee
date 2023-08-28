import { Minus, Plus } from "phosphor-react"
import { AmountInputContainer } from "./styles"

export function AmountInput() {
  return (
    <AmountInputContainer>
      <Plus weight="bold" className="Plus" />
      <span>1</span>
      <Minus weight="bold" className="Minus" />
    </AmountInputContainer>
  )
}