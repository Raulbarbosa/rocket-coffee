import { styled } from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;

  width: 25.6rem;
  height: 31rem;

  border-radius: 6px 36px;
  padding: 20px;

  background: ${props => props.theme.colors['base-card']};

`

export const CoffeePhoto = styled.img`
  position: absolute;

  top: -2rem;

`

export const CoffeeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors['yellow-light']};
  
  margin-top: calc(10rem - 2rem - 2rem + 1.6rem);

  border-radius: 100px;
  padding: 4px 8px;

  span {
    color: ${props => props.theme.colors['yellow-dark']};
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  }
`

export const CoffeeName = styled.span`
  color: ${props => props.theme.colors['base-subtitle']};

  text-align: center;
  font-family: 'baloo 2';
  font-size: ${props => props.theme.fonts.ballo2['title-s'].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.ballo2['title-s'].fontWeight};
  line-height: ${props => props.theme.fonts.ballo2['title-s'].lineHeight};

  margin-top: 2rem;
`

export const CoffeeDescription = styled.span`
  color: ${props => props.theme.colors['base-label']};

  text-align: center;
  font-family: 'Roboto';
  font-size: ${props => props.theme.fonts.roboto['text-s'].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.roboto['text-s'].fontWeight};
  line-height: ${props => props.theme.fonts.roboto['text-s'].lineHeight};

`

export const CoffeeCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  width: 20.8rem;

  margin-top: 3.3rem;

`

export const CoffeePrice = styled.span`
  color: ${props => props.theme.colors['base-text']};

  font-family: 'baloo 2';
  font-size: ${props => props.theme.fonts.ballo2['title-m'].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.ballo2['title-m'].fontWeight};
  line-height: ${props => props.theme.fonts.ballo2['title-m'].lineHeight};  

  &::before {
    content: "R$ ";


    text-align: right;

    font-family: 'Roboto';
    font-size: ${props => props.theme.fonts.roboto['text-s'].fontSize};
    font-style: normal;
    font-weight: ${props => props.theme.fonts.roboto['text-s'].fontWeight};
    line-height: ${props => props.theme.fonts.roboto['text-s'].lineHeight};
  }
`

export const Counts = styled.div`
  display: flex;
  gap: 8px;
`