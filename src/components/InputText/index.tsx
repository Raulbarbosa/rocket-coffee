import { useContext, type ComponentProps } from "react";
import { InputTextContainer, InputTextMain, OptionalLabel } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { Address } from "../../interface";

interface InputTextProps extends ComponentProps<"input"> {
  optional?: boolean
  label: string
  size?: number
  name: string
}

interface KeyofAddress extends Address {
  customTarget: string
}

export function InputText({ optional = false, label = "Nome", size, name, ...rest }: InputTextProps) {
  const { setAddressData, addressData } = useContext(UserContext);

  function handleForm(event: { target: HTMLInputElement }) {
    const localAddressData = { ...addressData };
    const customTarget = event.target.name as unknown as KeyofAddress;

    if (event.target.name === "zip") {
      console.log("hello world");

    }
    localAddressData[customTarget] = event.target.value;
    setAddressData(localAddressData)
  }

  return (
    <InputTextContainer size={size} >
      <InputTextMain name={name} placeholder={label} {...rest} onChange={handleForm} />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
    </InputTextContainer>
  )
}