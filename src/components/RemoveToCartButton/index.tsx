import { Trash } from "phosphor-react";
import { RemoveToCartButtonContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface RemoveToCartButtonProps {
  id: string
}

export function RemoveToCartButton({ id }: RemoveToCartButtonProps) {
  const { removeCoffee } = useContext(CartContext)

  function handleRemoveCoffee() {
    removeCoffee(id)
  }

  return (
    <RemoveToCartButtonContainer onClick={handleRemoveCoffee}>
      <Trash />
      Remover
    </RemoveToCartButtonContainer>
  )
}