import { styled } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  color: ${props => props.theme.colors["base-subtitle"]};

  font-family: 'Baloo 2';
  font-size: ${props => props.theme.fonts.ballo2["title-l"].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.ballo2["title-l"].fontWeight};
  line-height: ${props => props.theme.fonts.ballo2["title-l"].lineHeight};

  margin-bottom: 5.4rem;
`