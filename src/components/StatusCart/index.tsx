import { AmountIntoCart, AmountValue, StatusCartContainer } from "./styles";
import StatusCartIcon from '../../assets/StatusCart.png';

export function StatusCart() {
  return (
    <StatusCartContainer>
      <AmountIntoCart>
        <AmountValue>
          3
        </AmountValue>
      </AmountIntoCart>
      <img src={StatusCartIcon} />
    </StatusCartContainer>
  )
}