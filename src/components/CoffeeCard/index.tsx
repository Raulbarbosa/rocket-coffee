import { AddToCartButton } from "../AddToCartButton";
import { AmountInput } from "../AmountInput";
import { CoffeeCardContainer, CoffeeCount, CoffeeDescription, CoffeeName, CoffeePhoto, CoffeePrice, CoffeeStyle, CoffeeStyleContainer, Counts } from "./styles";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Coffee } from "../../interface";

export function CoffeeCard({ image, description, price, name, type, id }: Coffee) {
  const [amount, setAmount] = useState(0);
  const { cart } = useContext(CartContext);

  function handlerAmount(param: number) {
    setAmount(param)
  }

  useEffect(() => {
    const item = cart.find(item => item.id === id);
    if (item && item.unit) {
      setAmount(item.unit)
    }
  }, [cart, id])

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
        <CoffeePrice>{price.replace('.', ',')}</CoffeePrice>
        <Counts>
          <AmountInput
            amount={amount}
            id={id}
            handler={handlerAmount}
          />
          <AddToCartButton amount={amount} id={id} />
        </Counts>
      </CoffeeCount>
    </CoffeeCardContainer>
  )
}