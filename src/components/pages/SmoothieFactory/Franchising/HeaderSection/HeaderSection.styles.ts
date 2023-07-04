import styled from 'styled-components';

import { ButtonContainer } from '@components/pages/SmoothieFactory/Button/Button.styles';
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
  background-image: url('/images/sf-header-bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    background-size: cover;
  }
`;

export const FullWidthContentContainer = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  overflow: hidden;
  overflow-y: visible;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    height: 1415px;
  }
`;

export const FullWidthCircularDiv = styled.div`
  border-radius: 0 0 30% 0;
  background-color: white;
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
  padding: 100px 0 0 0;
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
  width: 710px;
  height: 733px;
  z-index: 2;
  margin-top: -100px;
  position: absolute;
  top: 5%;
  right: -5%;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    right: -10%;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    right: -35%;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    top: unset;
    bottom: 0;
    right: 0;
  }
`;

export const MainContentCircularImage = styled.img`
  width: 852px;
  height: 877px;
  z-index: 1;
  position: absolute;
  bottom: 6%;
  right: -10%;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    right: -15%;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    right: -40%;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    top: unset;
    bottom: 0;
    right: -10%;
  }
`;

export const MainText = styled.h2`
  color: #23aa5d;
  font-size: 52px;
  line-height: 63px;
  margin-bottom: 20px;
  max-width: 555px;
  text-transform: uppercase;
  position: relative;

  span {
    font-size: 52px;
    line-height: 63px;
    margin-bottom: 20px;

    @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
      color: #ff6034;
    }
  }
`;

export const LeafImage = styled.img`
  width: 93px;
  height: 97px;
  z-index: -1;
  position: absolute;
  bottom: 80%;
  right: 10%;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 32px;
  max-width: 444px;
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
  font-size: 44px;
  line-height: 50px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #23aa5d;
  background-color: white;
  width: 90%;
  height: 40%;
  border-radius: 25%;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    font-size: 24px;
    line-height: 28px;
    height: auto;
  }
`;

export const CardContentContainer = styled.div`
  width: 330px;
  height: 330px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 100%;
  box-shadow: 1px 2px 5px #f4f4f4 inset;

  &:not(:last-child) {
    margin-right: 36px;

    @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    width: 240px;
    height: 240px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: 180px;
    height: 180px;
  }

  @media only screen and (max-width: 960px) {
    width: 180px;
    height: 180px;
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
  width: 70%;
  height: 70%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  margin: auto auto;
  z-index: 1;
  border-radius: 100%;
  border: 6px solid #f47531;
`;
