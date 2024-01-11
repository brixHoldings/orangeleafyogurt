import styled from 'styled-components';

import theme from '@styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    margin-bottom: 100px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-size: 16px;
  max-width: 603px;
  line-height: 32px;
  margin-bottom: clamp(21px, 2.64vw, 40px);
`;

export const Disclaimer = styled.p`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  max-width: 719px;
  font-style: italic;
`;
