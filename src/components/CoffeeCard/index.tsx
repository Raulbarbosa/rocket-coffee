import { CoffeeCardContainer, CoffeeCount, CoffeeDescription, CoffeeName, CoffeePhoto, CoffeePrice, CoffeeStyle, CoffeeStyleContainer, Counts } from "./styles";
import { AmountInput } from "../AmountInput";
import { AddToCartButton } from "../AddToCartButton";

import { Coffee } from "../../interface";

export function CoffeeCard({ image, description, price, name, type, id }: Coffee) {
  console.log(type);

  return (
    <CoffeeCardContainer>
      <CoffeePhoto src={image} />
      <CoffeeStyleContainer>
        {
          type.map(item => {
            return (
              <CoffeeStyle key={id + name}>
                <span>
                  {item}
                </span>
              </CoffeeStyle>
            )
          })
        }
      </CoffeeStyleContainer>
      <CoffeeName>
        {name}
      </CoffeeName>
      <CoffeeDescription>
        {description}
      </CoffeeDescription>
      <CoffeeCount>
        <CoffeePrice>{price}</CoffeePrice>
        <Counts>
          <AmountInput />
          <AddToCartButton />
        </Counts>
      </CoffeeCount>
    </CoffeeCardContainer>
  )
}