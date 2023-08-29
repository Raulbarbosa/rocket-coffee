import { styled } from "styled-components";

export const StatusCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 8px;
  gap: 4px;
  border-radius: 6px;

  max-width: 38px;

  background: ${props => props.theme.colors['yellow-light']};

  &:hover {
    cursor: pointer;
  }

`

export const AmountIntoCart = styled.div`
display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors['yellow-dark']};
  border-radius: 50%;
  width: 20px;
  height: 20px;

  position: absolute;
  top: -6px;
  right: -10px;

  text-align: center;

`

export const AmountValue = styled.span`
  color: ${props => props.theme.colors['white']};

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 15.6px */
  letter-spacing: -0.72px;
`