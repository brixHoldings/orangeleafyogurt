import styled from 'styled-components';

import theme from '@styles/theme';

export const Container = styled.div`
  background: url('/images/rm-why-us-bg.png') left top;
  background-repeat: no-repeat;
  padding-top: 112px;
  margin-top: 40px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    background: none;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 128px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  width: 484px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 172px;
  margin-right: 100px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-right: 172px;
    width: unset;
    margin-bottom: 70px;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-left: 25px;
    margin-right: 25px;
  }
`;

export const ContentRight = styled.div`
  width: 484px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 172px;
  margin-left: 100px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-left: 172px;
    width: unset;
    margin-bottom: 70px;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-left: 25px;
    margin-right: 25px;
  }
`;

export const Title = styled.h2`
  font-size: 52px;
  line-height: 72px;
  margin-left: 172px;
  margin-bottom: 60px;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-left: 25px;
    margin-right: 25px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  justify-content: center;
  max-width: calc(100% - 756px);
  display: flex;

  > span {
    margin-top: auto !important;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    order: 2;
    max-width: unset;
    margin: 0 172px;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin: 0 25px;
  }
`;
