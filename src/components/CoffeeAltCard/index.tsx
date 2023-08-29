import { CoffeeAltCardContainer, CoffeeCount, CoffeeGeneralInfo, CoffeeName, CoffeePhoto, Info, TotalOfType } from "./styles";
import Coffee from '../../assets/simple.png'
import { AmountInput } from "../AmountInput";
import { RemoveToCartButton } from "../RemoveToCartButton";

export function CoffeeAltCard() {
  return (
    <CoffeeAltCardContainer>
      <CoffeeGeneralInfo>
        <CoffeePhoto src={Coffee} />
        <Info>
          <CoffeeName>Expresso Tradicional</CoffeeName>
          <CoffeeCount>
            <AmountInput />
            <RemoveToCartButton />
          </CoffeeCount>
        </Info>
      </CoffeeGeneralInfo>
      <TotalOfType>R$ 9,99</TotalOfType>
    </CoffeeAltCardContainer>
  )
}