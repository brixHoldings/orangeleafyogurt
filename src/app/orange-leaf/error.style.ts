import styled from 'styled-components';
import theme from '@styles/theme';

const maxWidth = '1153px';

export const Container = styled.section`
  width: 100%;
  padding-top: clamp(97px, 14.35vw, 147px);
  margin-inline: auto;
  position: relative;
  @media only screen and (min-width: ${theme.breakpoints.smallScreen}px) {
    width: min(calc(100vw - 64px), ${maxWidth});
  }
  @media only screen and (min-width: ${theme.breakpoints.desktop}px) {
    padding-top: clamp(147px, 13.29vw, 201px);
  }
`;
