import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useContext, useState } from "react";
import { InputText } from "../../components/InputText";
import { CartContext } from "../../contexts/CartContext";
import { Cart } from "./components/Cart";
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
// import { UserContext } from "../../contexts/UserContext";

export function Checkout() {
  const { cart } = useContext(CartContext);
  // const { addressData, paymentMethod, setAddressData, setPaymentMethod } = useContext(UserContext)

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
              <InputText label="CEP" name="zip" size={2} />
              <InputText label="Rua" name="street" size={5.36} />
              <InputText label="Número" name="number" size={1.76} />
              <InputText label="Complemento" name="addition" optional size={3.48} />
              <InputText label="Bairro" name="district" size={1.76} />
              <InputText label="Cidade" name="city" size={2.52} />
              <InputText label="UF" name="state" size={0.6} />
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