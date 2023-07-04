import styled from 'styled-components';

import { ButtonContainer } from '@components/pages/RedMango/Button/Button.styles';
import MobileContainer from '@components/ui/MobileContainer';
import theme from '@styles/theme';

export const BottomContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 500px;
  position: relative;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    height: 300px;
  }

  ${MobileContainer} {
    @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
      position: relative;
      padding-bottom: 80px;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    height: unset;
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  background-image: url('/images/RedMangoHeaderBackground.png');
  background-repeat: no-repeat;
  background-position: bottom;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    background-size: cover;
  }
`;

export const FullWidthContentContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  overflow-y: visible;
`;

export const FullWidthCircularDiv = styled.div`
  border-radius: 0 0 30% 0;
  background-color: #cb333b;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  z-index: 0;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 172px;
  display: flex;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    padding-left: 20px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    align-items: center;
    padding-left: 0px;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContent = styled.div`
  padding: 100px 52px 0 0;
  display: flex;
  flex-direction: column;
  z-index: 3;
  max-width: 599px;
  min-width: 360px;

  ${ButtonContainer} {
    @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
      width: 100%;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding: 100px 0 0;
    max-width: none;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    min-width: auto;
  }
`;

export const MainContentImage = styled.img`
  width: 811px;
  height: 794px;
  z-index: 2;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-top: -75px;
  }
`;

export const MainText = styled.h2`
  color: white;
  font-size: 52px;
  line-height: 63px;
  margin-bottom: 20px;

  span {
    color: white;
    font-size: 52px;
    line-height: 63px;
    margin-bottom: 20px;

    @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
      color: #ff6034;
    }
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 32px;
`;

export const CardsContainer = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: -25%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    top: -20%;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -50px;
  }

  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const CardText = styled.h2`
  font-size: 52px;
  line-height: 54px;
  z-index: 2;
  text-align: center;
  color: #cb333b;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 960px) {
    font-size: 32px;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 52px;
  }
`;

export const CardContentContainer = styled.div`
  width: 330px;
  height: 330px;
  position: relative;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 36px;

    @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    width: 220px;
    height: 220px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: 180px;
  }

  @media only screen and (max-width: 960px) {
    width: 160px;
    height: 160px;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    width: 380px;
    height: 380px;
  }

  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
