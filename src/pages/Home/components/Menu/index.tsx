import { CoffeeCard } from "../../../../components/CoffeeCard";
import { MenuContainer } from "./styles";

import { coffees } from '../../../../coffee'

export function Menu() {
  console.log(coffees);


  return (
    <MenuContainer>
      {
        coffees.map(coffee => {
          return <CoffeeCard
            key={coffee.id}
            image={coffee.image}
            description={coffee.description}
            name={coffee.name}
            price={coffee.price}
            type={coffee.type}
            id={coffee.id} />
        })
      }
    </MenuContainer>
  )
}