import { Trash } from "phosphor-react";
import { RemoveToCartButtonContainer } from "./styles";

export function RemoveToCartButton() {
  return (
    <RemoveToCartButtonContainer>
      <Trash />
      Remover
    </RemoveToCartButtonContainer>
  )
}