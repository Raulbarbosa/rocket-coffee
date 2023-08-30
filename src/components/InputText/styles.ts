import { styled } from "styled-components";

export const InputTextContainer = styled.div`
  display: flex;
  width: 434px;

  position: relative;
`

export const InputTextMain = styled.input`
  display: flex;
  width: 100%;
  padding: 12px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors['base-button']};
  background: ${props => props.theme.colors['base-input']};
  outline: none;

  color: var(--base-text, #574F4D);
  /* Text/Regular S */
  font-family: 'Roboto';
  font-size: ${props => props.theme.fonts.roboto['text-s'].fontSize};
  font-style: normal;
  font-weight: ${props => props.theme.fonts.roboto['text-s'].fontWeight};
  line-height: ${props => props.theme.fonts.roboto['text-s'].lineHeight};

  &:focus {
     border: 1px solid ${props => props.theme.colors['yellow-dark']};
  }

`

export const OptionalLabel = styled.span`
  position: absolute;
  right: 12px;
  top: 12px;

  color: ${props => props.theme.colors["base-label"]};
  font-family: 'Roboto';
  font-size: ${props => props.theme.fonts.roboto["text-xs"].fontSize};
  font-style: italic;
  font-weight: ${props => props.theme.fonts.roboto["text-m"].fontWeight};
  line-height: ${props => props.theme.fonts.roboto["text-xs"].lineHeight};
`