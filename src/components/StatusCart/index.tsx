import { AmountIntoCart, AmountValue, StatusCartContainer } from "./styles";
import StatusCartIcon from '../../assets/StatusCart.png';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function StatusCart() {
  const { cart } = useContext(CartContext);

  const AmountItensValidOnCart = cart.filter((item) => item.unit !== 0)

  return (
    <StatusCartContainer>
      <AmountIntoCart>
        <AmountValue>
          {AmountItensValidOnCart.length}
        </AmountValue>
      </AmountIntoCart>
      <img src={StatusCartIcon} />
    </StatusCartContainer>
  )
}