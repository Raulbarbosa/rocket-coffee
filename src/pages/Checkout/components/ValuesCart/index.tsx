import { useContext, useEffect } from "react";
import { DeliveryTax, Total, TotalItems, ValuesCartContainer } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";

export function ValuesCart() {
  const { tax, total, totalBrute } = useContext(CartContext);

  useEffect(() => {
    console.log('Hello World');

  }, [tax, total, totalBrute])
  return (
    <ValuesCartContainer>
      <TotalItems><span>Total de itens</span><span>R$ {totalBrute.toFixed(2)}</span></TotalItems>
      <DeliveryTax><span>Entrega</span><span>R$ {tax.toFixed(2)}</span></DeliveryTax>
      <Total><span>Total</span><span>R$ {total.toFixed(2)}</span></Total>
    </ValuesCartContainer>
  )
}