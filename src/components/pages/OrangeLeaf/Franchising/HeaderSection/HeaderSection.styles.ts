import styled, { css } from 'styled-components';

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

export const Text = styled.p`
  color: #421b00;
  font-size: 16px;
  line-height: 32px;
  max-width: 447px;
`;

export const CardsContainer = styled.div`
  z-index: 2;
  gap: 32px;
  display: flex;
  padding-inline: 32px;
  transform: translateY(-30%);
  justify-content: center;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const CardText = styled.h2<CardTextProps>`
  font-size: clamp(30px, 3.43vw, 52px);
  line-height: clamp(35px, 3.57vw, 54px);
  ${({ color }): CSSProp =>
    css`
      color: ${color};
    `}
`;

export const CardContentContainer = styled.div`
  max-width: 368px;
  flex: 1;
  background-color: #fff;
  border-radius: 29px;
  padding: clamp(20px, 2.31vw, 35px) clamp(20px, 2.64vw, 40px);
  box-shadow: 0px 5px 10px 0px rgba(66, 27, 0, 0.25);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    max-width: initial;
  }
`;

export const Content = styled.div`
  padding-block: 143px 137px;
  padding-left: 61px;
  display: flex;
  position: relative;
  gap: 35px;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    flex-direction: column;
    padding-inline: 32px;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const YellowBg = styled.div`
  background-color: #ffdb31;
  width: 54.1%;
  position: absolute;
  height: 100%;
  top: 0;
  z-index: -1;
  left: 0;
`;

export const Title = styled.h1`
  color: #421b00;
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(32px, 4.1vw, 62px);
  margin-bottom: 22px;
  font-family: var(--gotham-ultra);
  max-width: 531px;
`;
