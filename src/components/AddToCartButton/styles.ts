import { styled } from "styled-components";

export const AddToCartButtonContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  max-width: 38px;

  background: ${props => props.theme.colors['purple-dark']};

  &:hover {
    background: ${props => props.theme.colors['purple']};
    cursor: pointer;
  }
`