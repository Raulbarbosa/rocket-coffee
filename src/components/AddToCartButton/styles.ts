import { styled } from "styled-components";

export const AddToCartButtonContainer = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  background: ${props => props.theme.colors['purple-dark']};

  &:hover {
    background: ${props => props.theme.colors['purple']};
  }
`