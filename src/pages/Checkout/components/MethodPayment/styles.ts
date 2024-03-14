import { styled } from "styled-components";

interface MethodPaymentContainerProps {
  ishover: boolean
  ischecked: boolean
}

export const MethodPaymentContainer = styled.div<MethodPaymentContainerProps>`
  background: ${props => props.ishover ?
    props.theme.colors["base-hover"] :
    props.ischecked ?
      props.theme.colors["purple-light"] :
      props.theme.colors["base-button"]};

  color: ${props => props.theme.colors["base-text"]};
  border: 1px solid transparent;
  border-radius: 6px;

  padding: 1.6rem;

  position: relative;

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