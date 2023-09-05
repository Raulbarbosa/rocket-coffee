import { AddToCartButton } from "../AddToCartButton";
import { AmountInput } from "../AmountInput";
import { CoffeeCardContainer, CoffeeCount, CoffeeDescription, CoffeeName, CoffeePhoto, CoffeePrice, CoffeeStyle, CoffeeStyleContainer, Counts } from "./styles";

import { Coffee } from "../../interface";

export function CoffeeCard({ image, description, price, name, type, id }: Coffee) {



  return (
    <CoffeeCardContainer>
      <CoffeePhoto src={image} />
      <CoffeeStyleContainer>
        {
          type.map(item => {
            return (
              <CoffeeStyle key={id + item}>
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
          <AmountInput identifier={id} />
          <AddToCartButton />
        </Counts>
      </CoffeeCount>
    </CoffeeCardContainer>
  )
}