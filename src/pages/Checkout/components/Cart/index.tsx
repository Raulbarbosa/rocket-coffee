import { useContext } from "react";
import { CoffeeAltCard } from "../../../../components/CoffeeAltCard";
import { PrimaryButton } from "../../../../components/PrimaryButton";
import { CartContext } from "../../../../contexts/CartContext";
import { UserContext } from "../../../../contexts/UserContext";
import { Divisor } from "../Divisor";
import { ValuesCart } from "../ValuesCart";
import { CartArea, CartContainer, CartText } from "./styles";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, cleanCart } = useContext(CartContext);
  const { paymentMethod, addressData } = useContext(UserContext);
  const { total } = useContext(CartContext);

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
          paymentMethod &&
          total > 0 &&
          (addressData.number > 0 &&
            addressData.city &&
            addressData.street &&
            addressData.zip &&
            addressData.district &&
            addressData.state
          ) &&
          <Link to={"/success"}>
            <PrimaryButton title="Confirmar Pedido" cleanCart={cleanCart} />
          </Link>
        }
      </CartArea>
    </CartContainer>
  )
}