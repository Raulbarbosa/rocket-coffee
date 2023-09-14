import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AddressArea = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4rem;
  margin-bottom: 1.2rem;

  overflow: hidden;
  background: ${props => props.theme.colors["base-card"]};
`

const PresentationBase = styled.div`
  display: flex;

  gap: 8px;
  margin-bottom: 3.2rem;

  div {
    display: flex;
    flex-direction: column;

    span:first-child {
      color: ${props => props.theme.colors["base-subtitle"]};
      font-family: 'Roboto';
      font-size: ${props => props.theme.fonts.roboto["text-m"].fontSize};
      font-style: normal;
      font-weight: ${props => props.theme.fonts.roboto["text-m"].fontWeight};
      line-height: ${props => props.theme.fonts.roboto["text-m"].lineHeight};
    }

    span{
      color: ${props => props.theme.colors["base-text"]};
      font-family: 'Roboto';
      font-size: ${props => props.theme.fonts.roboto["text-s"].fontSize};
      font-style: normal;
      font-weight: ${props => props.theme.fonts.roboto["text-s"].fontWeight};
      line-height: ${props => props.theme.fonts.roboto["text-s"].lineHeight};
    }
  }

`

export const AddressPresentation = styled(PresentationBase)`
  svg {
    color: ${props => props.theme.colors["yellow-dark"]};
  }
`

export const InputArea = styled.div`
  max-width: 56rem;

  display: flex;
  flex-wrap: wrap;

  gap: 1.6rem 1.2rem;
`

export const PaymentArea = styled.div`
  width: 100%;

  padding: 4rem;

  background: ${props => props.theme.colors["base-card"]};
`

export const PaymentAreaPresentation = styled(PresentationBase)`
  svg {
    color: ${props => props.theme.colors["purple"]};
  }
`