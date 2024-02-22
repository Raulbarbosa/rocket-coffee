import { MapPin } from "phosphor-react";
import CoffeeLogo from '../../assets/Logo.png';
import { StatusCart } from "../StatusCart";
import { HeaderContainer, HeaderInfo, Location, Logo } from "./styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function Header() {
  const addressData = JSON.parse(localStorage.getItem("userAdressData"));

  useEffect(() => { }, [addressData])

  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo src={CoffeeLogo} />
      </Link>
      <HeaderInfo>
        {addressData &&
          <Location>
            <MapPin size={22} weight="fill" />
            {addressData.city}, {addressData.state}
          </Location>
        }
        <Link to={"/checkout"}>
          <StatusCart />
        </Link>
      </HeaderInfo>
    </HeaderContainer>
  )
}