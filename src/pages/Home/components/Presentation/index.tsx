import { Benefits, BenefitsContainer, HomeImage, PresentationContainer, PresentationInfo, PresentationMessage, SubPresentationMessage } from "./styles";
import PresentationImage from "../../../../assets/PresentationImage.png"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
export function Presentation() {
  return (
    <PresentationContainer>
      <PresentationInfo>
        <PresentationMessage>
          Encontre o café perfeito para qualquer hora do dia
        </PresentationMessage>
        <SubPresentationMessage>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </SubPresentationMessage>
        <BenefitsContainer>
          <Benefits backgroundColor="yellowDark">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </Benefits>
          <Benefits backgroundColor="grayDark">
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </Benefits>
          <Benefits backgroundColor="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </Benefits>
          <Benefits backgroundColor="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </Benefits>
        </BenefitsContainer>
      </PresentationInfo>
      <HomeImage src={PresentationImage} />
    </PresentationContainer>
  )
}