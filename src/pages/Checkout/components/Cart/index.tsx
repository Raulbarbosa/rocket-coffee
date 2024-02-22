import { useContext } from "react";
import { CoffeeAltCard } from "../../../../components/CoffeeAltCard";
import { PrimaryButton } from "../../../../components/PrimaryButton";
import { CartContext } from "../../../../contexts/CartContext";
import { Divisor } from "../Divisor";
import { ValuesCart } from "../ValuesCart";
import { CartArea, CartContainer, CartText } from "./styles";
import { UserContext } from "../../../../contexts/UserContext";

export function Cart() {
  const { cart } = useContext(CartContext);
  const { paymentMethod, addressData: { number } } = useContext(UserContext);

  return (
    <CartContainer>
      <CartText>
        Cafés selecionados
      </CartText>
      <CartArea>
        <div>
          {
            cart.map(coffee => {
              if (coffee && coffee.unit !== undefined && coffee.id) {
                return (
                  <div key={coffee.id}>
                    <CoffeeAltCard id={coffee.id} />
                    <Divisor />
                  </div>
                )
              }
            })
          }
        </div>
        <ValuesCart />
        {
          paymentMethod && number > 0 &&
          <PrimaryButton title="Confirmar Pedido" />
        }
      </CartArea>
    </CartContainer>
  )
}