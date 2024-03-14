import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: 0;
      /* outline: 1px solid red; */
    }

    body {
      background: ${(props) => props.theme.colors['background']};
      color: ${props => props.theme.colors['base-text']};
      font-family: 'Roboto', sans-serif;
      max-width: 100vw;
    }

    html {
      font-size: 62.5%;
    }
`