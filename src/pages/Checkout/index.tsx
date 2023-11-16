import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { FormEvent, useCallback, useContext, useEffect } from "react";
import { InputText } from "../../components/InputText";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { cep, number } from "../../utils/masks";
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

export function Checkout() {
  const { cart } = useContext(CartContext);
  const { addressData } = useContext(UserContext);

  const handleCEP = useCallback((e: FormEvent<HTMLInputElement>) => {
    cep(e);
  }, [])

  const handleNumber = useCallback((e: FormEvent<HTMLInputElement>) => {
    number(e)
  }, [])

  useEffect(() => {
  }, [addressData])

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
              <InputText label="CEP" name="zip" value={addressData.zip} size={2} onKeyUp={handleCEP} />
              <InputText label="Rua" name="street" value={addressData.street} size={5.36} />
              <InputText label="Número" name="number" value={addressData.number} maxLength={5} onKeyUp={handleNumber} size={1.76} />
              <InputText label="Complemento" name="addition" value={addressData.addition} optional size={3.48} />
              <InputText label="Bairro" name="district" value={addressData.district} maxLength={30} size={1.76} />
              <InputText label="Cidade" name="city" value={addressData.city} size={2.52} maxLength={30} />
              <InputText label="UF" name="state" value={addressData.state} size={0.6} maxLength={2} />
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