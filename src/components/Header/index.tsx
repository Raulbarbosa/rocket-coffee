import { MapPin } from "phosphor-react";
import CoffeeLogo from '../../assets/Logo.png';
import { StatusCart } from "../StatusCart";
import { HeaderContainer, HeaderInfo, Location, Logo } from "./styles";

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