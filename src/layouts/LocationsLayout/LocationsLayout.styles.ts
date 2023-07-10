import styled from 'styled-components';

import theme from '@styles/theme';

export const ContentWrapper = styled.section<{ footerHeight: number; navigationHeight: number }>`
  display: flex;
  position: fixed;
  left: 0;
  top: ${({ navigationHeight }): string => `${navigationHeight}px`};
  height: ${({ footerHeight, navigationHeight }): string => `calc(100% - ${footerHeight + navigationHeight}px)`};
  width: 100%;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    position: initial;
  }
`;

export const MapWrapper = styled.div`
  height: 100%;
  flex: 1;
  order: 2;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    order: 1;
    height: 232px;
    flex: initial;
  }
`;

export const Column = styled.div`
  display: flex;
  flex: 0 0 553px;
  height: 100%;
  flex-direction: column;
  order: 1;
  overflow-y: auto;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    order: 2;
    flex: 1;
  }
`;
