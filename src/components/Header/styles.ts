import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  z-index: 1;
  position: sticky;
  top: 0;
  
  width: 98vw;
  max-width: 100vw;
  height: 100px;

  padding: 3.2rem 16rem;

  background: ${props => props.theme.colors.background};
`

export const Logo = styled.img`

`

export const HeaderInfo = styled.div`
  display: flex;

  gap: 4px;
`

export const Location = styled.div`
  display: flex;
  align-items: center;

  background: ${props => props.theme.colors["purple-light"]};

  padding: 8px;
  gap: 4px;
  border-radius: 6px;

  font-family: 'Roboto';
  font-style: normal;
  font-size: ${props => props.theme.fonts.roboto["text-s"].fontSize};
  font-weight: ${props => props.theme.fonts.roboto["text-s"].fontWeight};
  line-height: ${props => props.theme.fonts.roboto["text-s"].lineHeight};
  color: ${props => props.theme.colors["purple-dark"]};

  &:hover {
  cursor: default;
  }

  svg {
    color: ${props => props.theme.colors["purple"]};
  }

`