import styled from 'styled-components';

import theme from '@styles/theme';

export const Container = styled.div`
  padding-top: 100px;
  position: relative;
  overflow-x: hidden;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
  }
`;

export const TitlePartOne = styled.h2`
  padding-left: 172px;
  font-size: 52px;
  line-height: 72px;
  font-family: var(--century-gothic);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 25px;
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    font-family: var(--gotham-ultra);
  }
`;

export const TitlePartTwo = styled.p`
  padding-left: 172px;
  font-size: 62px;
  line-height: 72px;
  margin-bottom: 52px;
  font-family: var(--century-gothic);
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

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-right: 20px;
  }

  &:nth-of-type(1) {
    color: #ff9828;
  }

  &:nth-of-type(2) {
    color: #d9d32f;
  }

  &:nth-of-type(3) {
    color: #ff6034;
  }

  &:nth-of-type(4) {
    color: #8ba726;
    margin-bottom: 132px;
  }
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  color: inherit;
  width: 420px;
`;

export const StepNumber = styled.span`
  width: 120px;
  text-align: center;
  font-size: 96px;
  line-height: 92px;
  margin-right: 32px;
  color: inherit;
`;

export const StepTitle = styled.h3`
  font-size: 40px;
  line-height: 48px;
  color: inherit;
`;

export const StepDescription = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #421b00;
`;

export const Splash = styled.div`
  position: relative;

  > span {
    z-index: 2;
  }
`;

export const SplashPill = styled.div`
  background: #d9d32f;
  border-radius: 100%;
  height: 270px;
  width: 270px;
  position: absolute;
  bottom: 38px;
  left: 44px;
  z-index: -1;
`;

export const SidePill = styled.div`
  background: #ffdb31;
  border-radius: 400px;
  height: 1520px;
  width: 800px;
  position: absolute;
  top: -59px;
  right: -59px;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > span {
    margin-right: 59px !important;
  }

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    height: 1316px;
    width: 384px;
    top: 30px;
    right: 0px;

    > span {
      margin-right: 0px !important;
      margin-left: 59px !important;

      margin-top: auto !important;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    height: 1316px;
    > span {
      margin-left: 184px !important;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    display: none !important;
  }
`;

export const MinorSidePill = styled.div`
  background: #f4f4f4;
  border-radius: 2px 2px 260px 260px;
  height: 520px;
  width: 530px;
  position: absolute;
  top: 48%;
  right: 0;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    top: unset;
    bottom: -88px;
    height: 360px;
    width: 384px;
    right: -59px;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    bottom: -53px;
    height: 224px;
    width: 250px;
    right: -48px;
  }

  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    display: none;
  }
`;
