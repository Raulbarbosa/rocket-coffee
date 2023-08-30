import { styled } from "styled-components";

export const RemoveToCartButtonContainer = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  height: 3.2rem;
  max-width: 9.1rem;
  padding: 0px 8px;
  gap: 4px;
  border-radius: 6px;

  background: ${props => props.theme.colors['base-button']};

  color: ${props => props.theme.colors['base-text']};
  
  font-style: normal;
  text-transform: uppercase;

  font-size: ${(props) => props.theme.fonts.roboto['button-m'].fontSize};
  font-weight: ${(props) => props.theme.fonts.roboto['button-m'].fontWeight};
  line-height: ${(props) => props.theme.fonts.roboto['button-m'].lineHeight};

  svg {
     color: ${props => props.theme.colors['purple']};
  }

  &:hover {
    background: ${props => props.theme.colors['base-hover']};
    cursor: pointer;

    svg {
      color: ${props => props.theme.colors['purple-dark']};
    }
  }

`