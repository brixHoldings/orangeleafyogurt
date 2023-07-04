import styled, { css } from 'styled-components';

import { ButtonContainer } from '@components/pages/OrangeLeaf/common/Button/Button.styles';
import { ContentContainer as ImportedContainer } from '@components/ui/Card/Card.styles';
import MobileContainer from '@components/ui/MobileContainer';
import theme from '@styles/theme';

import type { CSSProp } from 'styled-components';

type CardTextProps = {
  color: string;
};

export const BottomContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 368px;
  position: relative;

  ${MobileContainer} {
    @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
      position: relative;
      padding-bottom: 80px;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    height: unset;
    overflow-x: hidden;
    margin-top: 30px;
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
`;

export const FullWidthContentContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  overflow-y: visible;
`;

export const FullWidthCircularDiv = styled.div`
  border-radius: 0 0 30% 0;
  background-color: #f4f4f4;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  z-index: 0;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    background-color: #ffffff;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 140px 0 172px;
  display: flex;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding: 100px 0;
    align-items: center;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    padding: 100px 0 0;
    align-items: center;
  }
`;

export const TextContent = styled.div`
  padding: 100px 52px 0 0;
  display: flex;
  flex-direction: column;
  z-index: 3;
  max-width: 599px;

  ${ButtonContainer} {
    @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
      width: 100%;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding: 100px 0 0;
    max-width: none;
  }
`;

export const MainContentImage = styled.img`
  width: 545px;
  height: 727px;
  z-index: 2;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-top: -75px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: 348px;
    height: 464px;
  }
`;

export const CircularDiv = styled.div`
  width: 1072px;
  height: 1072px;
  position: absolute;
  right: 28px;
  top: -50%;
  z-index: 1;
  background-color: #d9d32f;
  border-radius: 100%;
  box-shadow: 0px 4px 10px 5px rgba(175, 177, 183, 0.25);

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: 1400px;
    height: 1400px;
    bottom: 25%;
    left: 25%;
    top: unset;
    right: unset;
  }
`;

export const MainText = styled.h2`
  color: #421b00;
  font-size: 52px;
  line-height: 63px;
  margin-bottom: 20px;
  font-family: var(--gotham-ultra);

  span {
    font-family: var(--gotham-ultra);
    color: #421b00;
    font-size: 52px;
    line-height: 63px;
    margin-bottom: 20px;

    @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
      color: #ff6034;
    }
  }
`;

export const Text = styled.p`
  color: #421b00;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 32px;
`;

export const BottomContentImage = styled.img`
  width: 485px;
  height: 425px;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    position: absolute;
    bottom: 0;
    right: -25%;
  }
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

  ${ImportedContainer} {
    &:not(:last-child) {
      margin-right: 36px;

      @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
        margin-right: 0;
        margin-bottom: 30px;
      }
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    top: -10%;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    position: relative;
  }

  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const CardText = styled.h2<CardTextProps>`
  font-size: 52px;
  line-height: 54px;

  ${({ color }): CSSProp =>
    css`
      color: ${color};
    `}

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
  width: 280px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    width: 230px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: 180px;
  }

  @media only screen and (max-width: 960px) {
    width: 140px;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    width: 380px;
  }

  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;
