import { styled } from "styled-components";

export const PrimaryButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 15rem;
  padding: 12px 8px;
  border-radius: 6px;
  gap: 4px;

  background: ${(props) => props.theme.colors['yellow']};
  color: ${(props) => props.theme.colors['white']};

  font-size: ${(props) => props.theme.fonts.roboto['button-g'].fontSize};
  font-weight: ${(props) => props.theme.fonts.roboto['button-g'].fontWeight};
  line-height: ${(props) => props.theme.fonts.roboto['button-g'].lineHeight};
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
    cursor: pointer;
  }

`