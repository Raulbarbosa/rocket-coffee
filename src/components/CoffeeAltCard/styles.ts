import { styled } from "styled-components";

export const CoffeeAltCardContainer = styled.div`
  background: ${props => props.theme.colors['base-card']};

  display: flex;
  width: 368px;
  padding: 8px 4px;
  justify-content: space-between;
`

export const CoffeeGeneralInfo = styled.div`
  display: flex;
  gap: 2rem;
`

export const CoffeePhoto = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const CoffeeName = styled.span`
  color: ${props => props.theme.colors['base-subtitle']};

  align-self: center;

  font-family: 'Roboto';
  font-style: normal;
  font-size: ${props => props.theme.fonts.roboto['text-m'].fontSize};
  font-weight: ${props => props.theme.fonts.roboto['text-m'].fontWeight};
  line-height: ${props => props.theme.fonts.roboto['text-m'].lineHeight};
`

export const CoffeeCount = styled.div`
  display: flex;
  gap: 0.8rem;

`

export const TotalOfType = styled.span`
  color: ${props => props.theme.colors['base-text']};

  text-align: right;
  font-family: 'Roboto';
  font-style: normal;
  font-size: ${props => props.theme.fonts.roboto['text-m'].fontSize};
  font-weight: ${props => props.theme.fonts.roboto['text-m'].fontWeight};
  line-height: ${props => props.theme.fonts.roboto['text-m'].lineHeight};
`