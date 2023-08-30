import { InputTextContainer, InputTextMain, OptionalLabel } from "./styles";

export function InputText({ optional = false, label = "Nome" }) {
  return (
    <InputTextContainer>
      <InputTextMain placeholder={label} />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
    </InputTextContainer>
  )
}