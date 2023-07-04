import type { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: number;
      tablet: number;
      smallScreen: number;
      desktop: number;
    };
  }
}

const theme: DefaultTheme = {
  breakpoints: {
    desktop: 1512,
    mobile: 480,
    smallScreen: 1024,
    tablet: 768,
  },
};

export default theme;
