import { styled } from "styled-components";

export const PresentationContainer = styled.div`
  display: flex;
  gap: 5.6rem;

  padding: 9.4rem 0;
`

export const PresentationInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const PresentationMessage = styled.span`

  margin-bottom: 1.6rem;

  color: ${props => props.theme.colors["base-title"]};

  font-family: 'Baloo 2';
  font-size: ${props => props.theme.fonts.ballo2["title-xl"].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.ballo2["title-xl"].fontWeight};
  line-height: ${props => props.theme.fonts.ballo2["title-xl"].lineHeight};
`

export const SubPresentationMessage = styled.span`
  margin-bottom: 6.6rem;

  color: ${props => props.theme.colors["base-subtitle"]};

  font-family: 'Roboto';
  font-size: ${props => props.theme.fonts.roboto["text-l"].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.roboto["text-l"].fontWeight};
  line-height: ${props => props.theme.fonts.roboto["text-l"].lineHeight};
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 4rem;
`

const BACKGROUND_COLOR = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
  grayDark: 'base-text'
} as const

interface BackgroundColorProps {
  backgroundColor: keyof typeof BACKGROUND_COLOR
}

export const Benefits = styled.div<BackgroundColorProps>`
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

  span {
    color: ${props => props.theme.colors["base-text"]};

    font-family: 'Roboto';
    font-size: ${props => props.theme.fonts.roboto["text-m"].fontSize};
    font-style: normal;
    font-weight: ${props => props.theme.fonts.roboto["text-l"].fontWeight};
    line-height: ${props => props.theme.fonts.roboto["text-l"].lineHeight};
  }
`


export const HomeImage = styled.img`
  width: 47.6rem;
  height: 36rem;
`