import styled, { css } from 'styled-components';

import theme from '@styles/theme';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

import type { CSSProp } from 'styled-components';
import type { MouseEventHandler } from 'react';

export const LottieWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const Wrapper = styled.div`
  position: relative;
  padding-top: clamp(149px, 12.69vw, 192px);
  margin-bottom: clamp(385px, 41.99vw, 635px);
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    padding-top: 0;
  }
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    margin-bottom: 77px;
  }
`;

export const SideContent = styled.div`
  position: absolute;
  top: 0;
  right: -20%;

  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    right: 0;
    top: 100%;
  }
`;

export const SliderContent = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const MobileSliderContent = styled(SliderContent)`
  position: relative;
`;

export const SliderName = styled.h2`
  margin-bottom: 14px;
  font-size: clamp(24px, 2.11vw, 32px);
  line-height: clamp(32px, 3.17vw, 48px);
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 32px;
  }
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    margin-bottom: 36px;
  }
`;

export const ButtonRound = styled.button`
  font-size: 14px;
  line-height: 13px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 35px;
  background: #ff9828;
  box-shadow: 0px 0px 10px rgba(113, 49, 14, 0.3);
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const ButtonRoundMobile = styled(ButtonRound)`
 margin-left
`;

export const SliderTitle = styled.h1`
  margin-bottom: 4px;
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 14px;
  }
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    margin-bottom: 17px;
  }
`;

export const SliderDescription = styled.p`
  margin-bottom: 35px;
  max-width: clamp(395px, 32.93vw, 498px);
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(22px, 2.11vw, 32px);
  margin-bottom: 35px;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 22px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  z-index: 2;
  position: relative;
  margin-bottom: clamp(165px, 12.56vw, 190px);
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    margin-bottom: 46px;
  }
`;

export const Circle = styled.div<{ background: string }>`
  width: clamp(331px, 57.01vw, 862px);
  height: clamp(331px, 57.01vw, 862px);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 26%), #fff 0);
    mask: radial-gradient(farthest-side, transparent calc(100% - 26%), #fff 0);
    ${({ background }): CSSProp => css`
      background: ${background};
    `}
  }
`;

export const MobileCircle = styled(Circle)<{ isRightAligned: boolean }>`
  z-index: -1;

  ${({ isRightAligned }): CSSProp => {
    if (isRightAligned) {
      return css`
        margin-left: auto;
        transform: translate(37%, -33px);
      `;
    }
    return css`
      transform: translate(-37%, -33px);
    `;
  }};
`;

export const SliderButtonsContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  left: 52%;
  top: calc(50% - 136px);
`;

export const SliderButton = styled.button<{
  isActive: boolean;
  activeColor: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>`
  width: 20px;
  border-radius: 10px;
  border: 0;
  transition: height 0.5s;
  z-index: 3;

  &:not(:last-child) {
    margin-bottom: 28px;
  }

  ${({ isActive, activeColor }): CSSProp => {
    if (isActive) {
      return css`
        height: 80px;
        background-color: ${activeColor};
      `;
    }

    return css`
      height: 20px;
      background-color: #fff;
      cursor: pointer;
    `;
  }}
`;

export const Image = styled(FloatingImage)<{ isActive: boolean }>`
  transition: opacity 0.5s;

  ${({ isActive }): CSSProp => {
    if (isActive) {
      return css`
        opacity: 1;
      `;
    }

    return css`
      opacity: 0;
    `;
  }}
`;
