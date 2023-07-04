import styled from 'styled-components';

import theme from '@styles/theme';

export const Container = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const ContentContainer = styled.div`
  padding: 64px 0 92px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url('/images/sf-purpose-bg.png') no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

export const Text = styled.p`
  font-size: 32px;
  line-height: 45px;
  z-index: 1;
  text-align: center;

  padding: 0 176px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding: 0 25px;
  }
`;

export const StyledLogo = styled.img`
  margin-bottom: 26px;
`;
