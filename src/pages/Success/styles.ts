import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;

  height: 40rem;

  gap: 2rem 6rem;
  padding: .2rem;
`

export const SuccessText = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    color: ${props => props.theme.colors["yellow-dark"]};

    font-family: 'Baloo 2';
    font-size: ${props => props.theme.fonts.ballo2["title-l"].fontSize};
    font-style: normal;
    font-weight: ${props => props.theme.fonts.ballo2["title-l"].fontWeight};
    line-height: ${props => props.theme.fonts.ballo2["title-l"].lineHeight};
  }

  span {
    color: ${props => props.theme.colors["base-subtitle"]};

    font-family: 'Roboto';
    font-size: ${props => props.theme.fonts.roboto["text-l"].fontSize};
    font-style: normal;
    font-weight: ${props => props.theme.fonts.roboto["text-l"].fontWeight};
    line-height: ${props => props.theme.fonts.roboto["text-l"].lineHeight};
  }
`

export const SuccessInfo = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;


  margin-top: 2.5rem;

  position: relative;
  background: #fff;
  border-radius: 0.375rem 2.25rem;

  &::after {
  content: "";
  position: absolute;
  top: 3px;
  right: 3px;
  bottom: 3px;
  left: 3px;
  z-index: -1;
  margin: -5px;
  border-radius: inherit;
  background-image: linear-gradient(45deg, purple, orange);
}

`

export const SucessAddressInfo = styled.div`

  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    color: ${props => props.theme.colors["base-text"]};

    font-family: 'Roboto';
    font-size: ${props => props.theme.fonts.roboto["text-m"].fontSize};
    font-style: normal;
    font-weight: ${props => props.theme.fonts.roboto["text-l"].fontWeight};
    line-height: ${props => props.theme.fonts.roboto["text-l"].lineHeight};
  }
`

export const SucessAddressInfoContainer = styled.div`
  display: flex;
`

export const SucessAddressInfoText = styled.div`
  display: flex; 
  flex-direction: column;
  margin-left: 0.75rem;
`

export const SuccessImage = styled.img`
  display: flex;

  width: 30.8rem;
  height: 18.3rem;
`
