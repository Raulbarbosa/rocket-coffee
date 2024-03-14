import { ReactNode } from "react";
import { Icon } from "./styles";

interface CustomIconProp {
  backgroundColor: "yellow" | "purple" | "yellowDark" | "grayDark"
  children: ReactNode
}

export function CustomIcon({ backgroundColor, children }: CustomIconProp) {
  return (
    <Icon backgroundColor={backgroundColor}>
      {children}
    </Icon>
  )
}