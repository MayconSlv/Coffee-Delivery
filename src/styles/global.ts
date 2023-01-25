import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    font-size: 1.6rem;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`