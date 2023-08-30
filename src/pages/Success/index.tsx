import { AddToCartButton } from "../../components/AddToCartButton";
import { AmountInput } from "../../components/AmountInput";
import { CoffeeAltCard } from "../../components/CoffeeAltCard";
import { CoffeeCard } from "../../components/CoffeeCard";
import { InputText } from "../../components/InputText";
import { PrimaryButton } from "../../components/PrimaryButton";
import { RemoveToCartButton } from "../../components/RemoveToCartButton";
import { StatusCart } from "../../components/StatusCart";

export function Success() {
  return (
    <>
      <h1>Success</h1>
      <PrimaryButton />
      <RemoveToCartButton />
      <AddToCartButton />
      <StatusCart />
      <AmountInput />
      <CoffeeCard />
      <CoffeeAltCard />
      <InputText optional />
    </>
  )
} 