import { useContext, useEffect } from "react";
import { DeliveryTax, Total, TotalItems, ValuesCartContainer } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";

export function ValuesCart() {
  const { total, cart } = useContext(CartContext);

  const totalWithFee = (total + Number(total * 0.117)).toFixed(2)

  useEffect(() => {
  }, [cart, total])

  return (
    <ValuesCartContainer>
      <TotalItems><span>Total de itens</span><span>R$ {total.toFixed(2)}</span></TotalItems>
      <DeliveryTax><span>Entrega</span><span>R$ {(total * 0.117).toFixed(2)}</span></DeliveryTax>
      <Total><span>Total</span><span>R$ {totalWithFee}</span></Total>
    </ValuesCartContainer>
  )
}