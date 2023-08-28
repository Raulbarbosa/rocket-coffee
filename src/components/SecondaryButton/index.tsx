import { Trash } from "phosphor-react";
import { SecondaryButtonContainer } from "./styles";

export function SecondaryButton() {
  return (
    <SecondaryButtonContainer>
      <Trash />
      Remover
    </SecondaryButtonContainer>
  )
}