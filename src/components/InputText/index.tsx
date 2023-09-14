import { InputTextContainer, InputTextMain, OptionalLabel } from "./styles";

interface InputTextProps {
  optional?: boolean
  label: string
  size?: number
}

export function InputText({ optional = false, label = "Nome", size }: InputTextProps) {
  return (
    <InputTextContainer size={size}>
      <InputTextMain placeholder={label} />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
    </InputTextContainer>
  )
}