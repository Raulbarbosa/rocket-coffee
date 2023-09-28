import { MapPin } from "phosphor-react";
import CoffeeLogo from '../../assets/Logo.png';
import { StatusCart } from "../StatusCart";
import { HeaderContainer, HeaderInfo, Location, Logo } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo src={CoffeeLogo} />
      </Link>
      <HeaderInfo>
        {
          <Location>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Location>
        }
        <Link to={"/checkout"}>
          <StatusCart />
        </Link>
      </HeaderInfo>
    </HeaderContainer>
  )
}