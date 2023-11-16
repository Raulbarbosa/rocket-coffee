import { useContext, type ComponentProps } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getAddress } from "../../services/api";
import { InputTextContainer, InputTextMain, OptionalLabel } from "./styles";

interface InputTextProps extends ComponentProps<"input"> {
  optional?: boolean
  label: string
  size?: number
  name: string
}

export function InputText({ optional = false, label = "Nome", size, name, ...rest }: InputTextProps) {
  const { setAddressData, addressData } = useContext(UserContext);

  async function handleForm(event: { target: HTMLInputElement }) {
    const localAddressData = { ...addressData };
    const customTarget = event.target.name;

    if (event.target.name === "zip" && event.target.value.length === 9) {
      const address = await getAddress(event.target.value);
      console.log("oshi", address);

      if (address?.status === 200) {

        localAddressData.zip = address.data.cep;
        localAddressData.city = address.data.localidade;
        localAddressData.street = address.data.logradouro;
        localAddressData.state = address.data.uf;
        localAddressData.district = address.data.bairro;
        localAddressData.addition = address.data.complemento;
        console.log("Vish", localAddressData);

        setAddressData(localAddressData);
      } else {
        console.log("Error");
      }
    } else {
      localAddressData[customTarget] = event.target.value;
      setAddressData(localAddressData)
    }
  }

  return (
    <InputTextContainer size={size} >
      <InputTextMain
        name={name}
        placeholder={label}
        disabled={name === "state" || name === "district" || name === "city"}
        {...rest}
        onChange={handleForm}
      />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
    </InputTextContainer>
  )
}