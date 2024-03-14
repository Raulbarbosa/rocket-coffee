import { styled } from "styled-components"

const BACKGROUND_COLOR = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
  grayDark: 'base-text'
} as const

interface BackgroundColorProps {
  backgroundColor: keyof typeof BACKGROUND_COLOR
}

export const Icon = styled.div<BackgroundColorProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  
  div {
    background: ${props => props.theme.colors[BACKGROUND_COLOR[props.backgroundColor]]};

    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 1000px;
  }

  svg {
    color: ${props => props.theme.colors.white}
  }
`