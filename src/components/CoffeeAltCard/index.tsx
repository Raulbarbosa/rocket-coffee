import { useContext, useEffect, useState } from "react";
import { coffees } from "../../coffee";
import { CartContext } from "../../contexts/CartContext";
import { AmountInput } from "../AmountInput";
import { RemoveToCartButton } from "../RemoveToCartButton";
import { CoffeeAltCardContainer, CoffeeCount, CoffeeGeneralInfo, CoffeeName, CoffeePhoto, Info, TotalOfType } from "./styles";

interface CoffeAltCardProps {
  id: string
}

export function CoffeeAltCard({ id }: CoffeAltCardProps) {
  const [amount, setAmount] = useState(0);
  const { cart } = useContext(CartContext);

  const coffeeFoundOnCart = cart.find(item => item.id === id);

  const coffeeFoundInCoffeList = coffees.find(coffee => coffee.id === id);

  const totalprice = (Number(coffeeFoundInCoffeList?.price) * Number(coffeeFoundOnCart?.unit)).toFixed(2);

  function handlerAmount(param: number) {
    setAmount(param)
  }

  useEffect(() => { }, [cart])

  return (
    <CoffeeAltCardContainer>
      <CoffeeGeneralInfo>
        <CoffeePhoto src={coffeeFoundInCoffeList?.image} />
        <Info>
          <CoffeeName>{coffeeFoundInCoffeList?.name}</CoffeeName>
          <CoffeeCount>
            <AmountInput
              amount={coffeeFoundOnCart?.unit}
              id={id}
              handler={handlerAmount}
            />
            <RemoveToCartButton id={id} />
          </CoffeeCount>
        </Info>
      </CoffeeGeneralInfo>
      <TotalOfType>R$ {totalprice}</TotalOfType>
    </CoffeeAltCardContainer>
  )
}