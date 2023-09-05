import { styled } from "styled-components";

export const AmountInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  width: 7.2rem;

  padding: 8px;
  border-radius: 6px;
  gap: 4px;

  background: ${props => props.theme.colors['base-button']};

  span {
    color: ${props => props.theme.colors['base-title']};
        /* Text/Regular M */
    font-family: 'Roboto';
    font-size: ${props => props.theme.fonts.roboto["text-m"].fontSize};
    font-style: normal;
    font-weight: ${props => props.theme.fonts.roboto["text-m"].fontWeight};
    line-height: ${props => props.theme.fonts.roboto["text-m"].lineHeight};
  }

  svg {
    color: ${props => props.theme.colors['purple']};
    transition: color 0.3s ease;
  }

  svg.Plus:hover {
    color: ${props => props.theme.colors['purple-dark']};
    cursor: pointer;
  }

  svg.Minus:hover {
    color: ${props => props.theme.colors['purple-dark']};
    cursor: pointer;
  }
`