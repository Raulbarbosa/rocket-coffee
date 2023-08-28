import { CoffeeCardContainer, CoffeeCount, CoffeeDescription, CoffeeName, CoffeePhoto, CoffeePrice, CoffeeStyle, Counts } from "./styles";
import American from './../../assets/american.png'
import { AmountInput } from "../AmountInput";
import { AddToCartButton } from "../AddToCartButton";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeePhoto src={American} />
      <CoffeeStyle>
        <span>
          Tradicional
        </span>
      </CoffeeStyle>
      <CoffeeName>
        Expresso Tradicional
      </CoffeeName>
      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>
      <CoffeeCount>
        <CoffeePrice>9,99</CoffeePrice>
        <Counts>
          <AmountInput />
          <AddToCartButton />
        </Counts>
      </CoffeeCount>
    </CoffeeCardContainer>
  )
}