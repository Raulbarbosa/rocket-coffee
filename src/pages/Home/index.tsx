import { Menu } from "./components/Menu";
import { Presentation } from "./components/Presentation";
import { HomeContainer, Label } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Presentation />
      <Label>Nossos Cafés</Label>
      <Menu />
    </HomeContainer>
  )
} 