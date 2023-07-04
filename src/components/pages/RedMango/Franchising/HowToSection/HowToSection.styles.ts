import styled from 'styled-components';

import theme from '@styles/theme';

export const BackgroundContainer = styled.div`
  margin-bottom: 48px;
  background-image: url('/images/rm-what-is.png');
  background-repeat: no-repeat;
  background-position: bottom right;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    background-position: bottom left;
  }
`;

export const Container = styled.div`
  padding-top: 72px;
  padding-bottom: 72px;
  position: relative;
  overflow-x: hidden;
  background-image: url('/images/rm-what-is2.png');
  background-repeat: no-repeat;
  background-position: top right;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    background: none;
  }
`;

export const TitlePartOne = styled.h2`
  padding-left: 172px;
  font-size: 52px;
  line-height: 60px;
  text-transform: uppercase;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 25px;
  }
`;

export const TitlePartTwo = styled.p`
  padding-left: 172px;
  font-size: 52px;
  line-height: 60px;
  margin-bottom: 52px;
  text-transform: uppercase;
  font-family: 'Futura';

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 25px;
  }
`;

export const VideoOverlayQuote = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
`;

export const StepContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 40px;
  display: flex;
  color: #cb333b;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-right: 20px;
  }
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  color: inherit;
  width: 420px;
`;

export const StepNumber = styled.div`
  width: 120px;
  text-align: center;
  font-size: 96px;
  line-height: 92px;
  margin-right: 32px;
  color: inherit;
  font-family: 'Futura';
`;

export const StepTitle = styled.h3`
  font-size: 40px;
  line-height: 48px;
  color: inherit;
  margin-bottom: 16px;

  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const StepDescription = styled.p`
  font-size: 18px;
  line-height: 32px;
`;
