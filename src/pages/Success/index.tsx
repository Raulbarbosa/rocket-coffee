import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { CustomIcon } from "../../components/CustomIcon";
import { SuccessContainer, SuccessImage, SuccessInfo, SuccessText, SucessAddressInfo, SucessAddressInfoContainer, SucessAddressInfoText } from "./styles";
import Motoboy from "../../assets/Illustration.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Methods } from "../../enum";

export function Success() {
  const { addressData, paymentMethod } = useContext(UserContext);
  return (
    <SuccessContainer>
      <SuccessText>
        <span>Uhu! Pedido confirmado</span>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </SuccessText>
      <SuccessInfo>
        <SucessAddressInfo>
          <SucessAddressInfoContainer>
            <CustomIcon backgroundColor="purple">
              <div>
                <MapPin size={16} weight="fill" />
              </div>
            </CustomIcon>
            <SucessAddressInfoText>
              <span>Entrega em <strong>{addressData.street}, {addressData.number}</strong></span>
              <span>{addressData.district} - {addressData.city}, {addressData.state}</span>
            </SucessAddressInfoText>
          </SucessAddressInfoContainer>
          <SucessAddressInfoContainer>
            <CustomIcon backgroundColor="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
            </CustomIcon>
            <SucessAddressInfoText>
              <span>Previsão de entrega</span>
              <span><strong>20 min - 30 min</strong></span>
            </SucessAddressInfoText>
          </SucessAddressInfoContainer>
          <SucessAddressInfoContainer>
            <CustomIcon backgroundColor="yellowDark">
              <div>
                <CurrencyDollar size={16} weight="regular" />
              </div>
            </CustomIcon>
            <SucessAddressInfoText>
              <span>Pagamento na entrega</span>
              <span><strong>{Methods[paymentMethod]}</strong></span>
            </SucessAddressInfoText>
          </SucessAddressInfoContainer>
        </SucessAddressInfo>
      </SuccessInfo>
      <SuccessImage src={Motoboy} />
    </SuccessContainer>
  )
} 