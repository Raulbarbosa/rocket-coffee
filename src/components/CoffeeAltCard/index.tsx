import { useContext } from "react";
import { coffees } from "../../coffee";
import { CartContext } from "../../contexts/CartContext";
import { AmountInput } from "../AmountInput";
import { RemoveToCartButton } from "../RemoveToCartButton";
import { CoffeeAltCardContainer, CoffeeCount, CoffeeGeneralInfo, CoffeeName, CoffeePhoto, Info, TotalOfType } from "./styles";

interface CoffeAltCardProps {
  id: string | undefined
}

export function CoffeeAltCard({ id }: CoffeAltCardProps) {
  const { cart } = useContext(CartContext);

  const amount = cart.find(item => item.id === id);
  const obj = coffees.find(coffee => coffee.id === id);

  const totalprice = (Number(obj?.price) * Number(amount?.unit)).toFixed(2);

  return (
    <CoffeeAltCardContainer>
      <CoffeeGeneralInfo>
        <CoffeePhoto src={obj?.image} />
        <Info>
          <CoffeeName>{obj?.name}</CoffeeName>
          <CoffeeCount>
            <AmountInput identifier={obj?.id} />
            <RemoveToCartButton />
          </CoffeeCount>
        </Info>
      </CoffeeGeneralInfo>
      <TotalOfType>R$ {totalprice}</TotalOfType>
    </CoffeeAltCardContainer>
  )
}