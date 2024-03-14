import { MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
import CoffeeLogo from '../../assets/Logo.png';
import { StatusCart } from "../StatusCart";
import { HeaderContainer, HeaderInfo, Location, Logo } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Header() {
  const { addressData: { city, state } } = useContext(UserContext);
  const loadedDataString = localStorage.getItem("userAdressData");
  const loadedData = loadedDataString ? JSON.parse(loadedDataString) : null;

  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo src={CoffeeLogo} />
      </Link>
      <HeaderInfo>
        {loadedData && (
          <Location>
            <MapPin size={22} weight="fill" />
            {loadedData.city}, {loadedData.state}
          </Location>
        )}
        {!loadedData && state && city && (
          <Location>
            <MapPin size={22} weight="fill" />
            {city}, {state}
          </Location>
        )}
        <Link to={"/checkout"}>
          <StatusCart />
        </Link>
      </HeaderInfo>
    </HeaderContainer>
  );
}