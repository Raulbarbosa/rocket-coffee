import { styled } from "styled-components";

export const MethodPaymentContainer = styled.div`
  background: ${props => props.theme.colors["base-button"]};
  color: ${props => props.theme.colors["base-text"]};
  border: 1px solid transparent;
  border-radius: 6px;

  padding: 1.6rem;

  position: relative;

  input[type="radio"]:hover & {
     /* background: ${(props) => props.theme.colors["base-hover"]};  */
    background: red;
  } 

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: ${props => props.theme.colors["purple"]};
  }
`

export const Radio = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none;
  appearance: none;
  top: 0;
  left: 0;

  position: absolute;

  border: 1px solid transparent;

  width: 100%;
  height: 100%;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors["purple-dark"]};

    ${MethodPaymentContainer} {
      background: red;
    }
  }

  &:checked {
    border: 1px solid ${props => props.theme.colors["purple"]};
  }

`

export const MethodPaymentLabel = styled.span`
  font-family: 'Roboto';
  font-size: ${props => props.theme.fonts.roboto["text-s"].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.roboto["text-s"].fontWeight};
  line-height: ${props => props.theme.fonts.roboto["text-s"].lineHeight};
  text-transform: uppercase;

  margin-left: 1.2rem;
`

export const Button = styled.button`
  background: blue;
  color: white;

  padding: 16px;
  border-radius: 6px;

  &:hover {
    background: gray;
  }
`;

export const Icon = styled.i`
  color: white;
  font-size: 1.5em;

  ${Button}:hover & {
    color: black;
  }
`;