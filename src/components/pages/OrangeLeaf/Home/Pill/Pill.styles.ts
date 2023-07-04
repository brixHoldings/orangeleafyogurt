import styled from 'styled-components';
import theme from '@styles/theme';

export const Container = styled.div`
  position: relative;
`;

export const PillShape = styled.div`
  background: linear-gradient(180deg, #ff6b00 0%, rgba(255, 107, 0, 0) 100%);
  border-radius: 300px;
  width: 600px;
  height: 2043px;
  position: absolute;
  left: -124px;
  top: 0;
  z-index: -1;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    width: clamp(335px, 58.59vw, 600px);
    height: clamp(823px, 199.51vw, 2043px);
  }
`;

export const ChildContainer = styled.div``;
