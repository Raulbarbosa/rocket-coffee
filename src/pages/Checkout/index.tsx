import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { InputText } from "../../components/InputText";
import { MethodPayment } from "./components/MethodPayment";
import { AddressArea, AddressPresentation, CheckoutContainer, InputArea, PaymentArea, PaymentAreaPresentation } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
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
      </div>
    </CheckoutContainer >
  )
} 