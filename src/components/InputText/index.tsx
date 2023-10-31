import { InputTextContainer, InputTextMain, OptionalLabel } from "./styles";

interface InputTextProps {
  optional?: boolean
  label: string
  size?: number
  name: string
}

export function InputText({ optional = false, label = "Nome", size, name }: InputTextProps) {
  return (
    <InputTextContainer size={size}>
      <InputTextMain name={name} placeholder={label} />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
    </InputTextContainer>
  )
}