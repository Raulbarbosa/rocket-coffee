import { PrimaryButtonContainer } from "./styles";

interface PrimaryButtonProps {
  title: string
  cleanCart: () => void
}

export function PrimaryButton({ title, cleanCart }: PrimaryButtonProps) {
  return (
    <PrimaryButtonContainer onClick={cleanCart}>
      {title}
    </PrimaryButtonContainer>
  )
}