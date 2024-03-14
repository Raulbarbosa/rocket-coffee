import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 44.8rem;
`
export const CartText = styled.h1`
  color: ${props => props.theme.colors["base-subtitle"]};
  font-family: 'baloo 2';
  font-size: ${props => props.theme.fonts.ballo2["title-xs"].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.ballo2["title-xs"].fontWeight};
  line-height: ${props => props.theme.fonts.ballo2["title-xs"].lineHeight};

  margin-top: 4rem;
  margin-bottom: 1.5rem;
`

export const CartArea = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4rem;
  margin-bottom: 1.2rem;

  overflow: hidden;
  background: ${props => props.theme.colors["base-card"]};

  border-radius: 6px 44px;

  a {
    text-decoration: none;
  }
`

