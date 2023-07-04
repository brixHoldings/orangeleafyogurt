import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Variable Black';
    src: url('/fonts/VariableBlack.ttf');
  }

  @font-face {
    font-family: 'Futura';
    src: url('/fonts/Futura.ttf');
  }

  * {
    font-family: 'Variable Black', sans-serif;
    color: #4E3629;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Futura', sans-serif;
  }
`;

export default GlobalStyle;
