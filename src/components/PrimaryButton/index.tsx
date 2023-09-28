import { PrimaryButtonContainer } from "./styles";

interface PrimaryButtonProps {
  title: string
}

export function PrimaryButton({ title }: PrimaryButtonProps) {
  return (
    <PrimaryButtonContainer>
      {title}
    </PrimaryButtonContainer>
  )
}