import { AddToCartButtonContainer } from "./styles";
import ShoppingCartSimple from '../../assets/ShoppingCartSimple.png'

export function AddToCartButton() {
  return (
    <AddToCartButtonContainer>
      <img src={ShoppingCartSimple} />
    </AddToCartButtonContainer>
  )
}