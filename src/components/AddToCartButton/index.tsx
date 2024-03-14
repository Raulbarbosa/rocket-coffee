import { useContext } from "react";
import ShoppingCartSimple from '../../assets/ShoppingCartSimple.png';
import { CartContext } from "../../contexts/CartContext";
import { AddToCartButtonContainer } from "./styles";

interface AddToCartButtonProps {
  id: string
  amount: number
}

export function AddToCartButton({ id, amount }: AddToCartButtonProps) {
  const { updateCart } = useContext(CartContext)

  function handleUpdateCart() {
    if (amount >= 0) {
      updateCart({
        id,
        unit: amount
      })
    }
  }

  return (
    <AddToCartButtonContainer onClick={handleUpdateCart}>
      <img src={ShoppingCartSimple} />
    </AddToCartButtonContainer>
  )
}