import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lucida Grande';
    src: url('/fonts/LucidaGrande.ttf');
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/AvenirLTStd-Book.otf');
  }

  * {
    font-family: 'Avenir', sans-serif;
    color: #212221;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lucida Grande', sans-serif;
  }
`;

export default GlobalStyle;
