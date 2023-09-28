import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { InputText } from "../../components/InputText";
import { MethodPayment } from "./components/MethodPayment";
import {
  AddressArea,
  AddressAreaText,
  AddressContainer,
  AddressPresentation,
  CheckoutContainer,
  CheckoutSubContainer,
  InputArea,
  PaymentArea,
  PaymentAreaPresentation
} from "./styles";
import { Cart } from "./components/Cart";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Checkout() {
  const { cart } = useContext(CartContext);

  useEffect(() => {

    console.log(cart);


  }, [cart])

  return (
    <CheckoutContainer>
      <CheckoutSubContainer>
        <AddressContainer>
          <AddressAreaText>
            Complete seu pedido
          </AddressAreaText>
          <AddressArea>
            <AddressPresentation>
              <MapPinLine size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </AddressPresentation>
            <InputArea>
              <InputText label="CEP" size={2} />
              <InputText label="Rua" size={5.36} />
              <InputText label="Número" size={1.76} />
              <InputText label="Complemento" optional size={3.48} />
              <InputText label="Bairro" size={1.76} />
              <InputText label="Cidade" size={2.52} />
              <InputText label="UF" size={0.6} />
            </InputArea>
          </AddressArea>
          <PaymentArea>
            <PaymentAreaPresentation>
              <CurrencyDollar size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </PaymentAreaPresentation>
            <div style={{ display: "flex", gap: "1.2rem" }}>
              <MethodPayment method="credit" />
              <MethodPayment method="debit" />
              <MethodPayment method="cash" />
            </div>
          </PaymentArea>
        </AddressContainer>
        {
          cart.length > 0 &&
          <Cart />
        }
      </CheckoutSubContainer>
    </CheckoutContainer >
  )
} 