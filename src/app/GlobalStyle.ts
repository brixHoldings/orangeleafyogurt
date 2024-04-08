'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html{
    width: 100%;
    display: block;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a {
    display: inline-flex;
    text-decoration: none;
    color: #ff6034;
  }

  body {
    color: #4E3629;
    margin: 0;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    position: relative;
  }
  main{
    /* overflow:hidden; */
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: var(--gotham-ultra);
    text-transform: uppercase;
  }

  p, span, input, a, label, textarea, select,li {
    font-family: var(--century-gothic);
  }
`;

export default GlobalStyle;
