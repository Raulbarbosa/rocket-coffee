import styled from "styled-components";

export const ValuesCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`

const BaseValuesDiv = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${props => props.theme.colors["base-text"]};
  font-family: 'Roboto';
  font-size: ${props => props.theme.fonts.roboto["text-m"].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.roboto["text-m"].fontWeight};
  line-height: ${props => props.theme.fonts.roboto["text-m"].lineHeight};

  span:first-child {
    color: ${props => props.theme.colors["base-text"]};
    font-family: 'Roboto';
    font-size: ${props => props.theme.fonts.roboto["text-s"].fontSize};
    font-style: normal;
    font-weight: ${props => props.theme.fonts.roboto["text-s"].fontWeight};
    line-height: ${props => props.theme.fonts.roboto["text-s"].lineHeight};
  }
`

export const TotalItems = styled(BaseValuesDiv)``
export const DeliveryTax = styled(BaseValuesDiv)``
export const Total = styled(BaseValuesDiv)`
  color: ${props => props.theme.colors["base-subtitle"]};
  font-family: 'Roboto';
  font-size: ${props => props.theme.fonts.roboto["text-l"].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.roboto["text-l"].fontWeight};
  line-height: ${props => props.theme.fonts.roboto["text-l"].lineHeight};

  span:first-child {
    color: ${props => props.theme.colors["base-subtitle"]};
    font-family: 'Roboto';
    font-size: ${props => props.theme.fonts.roboto["text-l"].fontSize};
    font-style: normal;
    font-weight: ${props => props.theme.fonts.roboto["text-l"].fontWeight};
    line-height: ${props => props.theme.fonts.roboto["text-l"].lineHeight};
  }
`