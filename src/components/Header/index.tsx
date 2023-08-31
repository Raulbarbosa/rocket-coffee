import { HeaderContainer, HeaderInfo, Location, Logo } from "./styles";
import CoffeeLogo from '../../assets/Logo.png';
import { StatusCart } from "../StatusCart";
import { MapPin } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={CoffeeLogo} />
      <HeaderInfo>
        {
          <Location>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Location>
        }
        <StatusCart />
      </HeaderInfo>
    </HeaderContainer>
  )
}