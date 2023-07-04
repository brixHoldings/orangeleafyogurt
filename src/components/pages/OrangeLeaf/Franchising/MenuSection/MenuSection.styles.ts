import styled, { css } from 'styled-components';

import theme from '@styles/theme';

import type { CSSProp } from 'styled-components';

type SliderButtonProps = {
  isActive: boolean;
  onClick: () => void;
};

type SliderImageContentTitleProps = {
  color: string;
};

type SliderAbsoluteContentWrapperProps = {
  isActive: boolean;
};

export const Container = styled.div`
  position: relative;
  padding-top: 304px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    padding-top: 108px;
  }
`;

export const CopyrightContainer = styled.div`
  padding-left: 172px;
  display: flex;
  margin-bottom: 48px;
  z-index: 1;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 25px;
  }
`;

export const CopyrightTitle = styled.h2`
  font-size: 52px;
  line-height: 72px;
`;

export const CopyrightSubtitle = styled.p`
  font-size: 52px;
  line-height: 72px;
  display: inline;
`;

export const SliderContainer = styled.div`
  width: 100%;
  z-index: 1;
`;

export const SliderImageContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 50px;
  background-color: white;
`;

export const SliderAbsoluteContentWrapper = styled.div<SliderAbsoluteContentWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 1s;

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

export const SliderButton = styled.button<SliderButtonProps>`
  height: 20px;
  margin-right: 28px;
  border-radius: 10px;
  border: 0;
  transition: width 0.5s;

  &:not(:last-child) {
    margin-right: 28px;
  }

  ${({ isActive }): CSSProp => {
    if (isActive) {
      return css`
        width: 80px;
        background-color: #ffdb31;
      `;
    }

    return css`
      width: 20px;
      background-color: #e3e3e3;
      cursor: pointer;
    `;
  }}
`;

export const SliderImageContent = styled.div`
  z-index: 1;
  position: absolute;
  border-bottom-left-radius: 250px;
  top: 0%;
  bottom: 0%;
  right: 0;
  width: min-content;
  background-color: white;
  padding: 50px 50px 0 50px;
  display: flex;
  flex-wrap: nowrap;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    position: relative;
    padding: 30px 25px;
    flex-direction: column-reverse;
    width: unset;
    border: 1px solid red;
  }
`;

export const SliderImageContentMainText = styled.p`
  min-width: 60%;
  font-size: 18px;
  line-height: 32px;
`;

export const SliderImageContentTitleContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const SliderImageContentTitle = styled.h2<SliderImageContentTitleProps>`
  font-size: 70px;
  line-height: 88px;
  transform-origin: top left;
  transform: rotate(-90deg) translate(-100%, 70%);
  color: ${({ color }): string => color};
  white-space: nowrap;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    transform: unset;
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 28px;
  }
`;

export const SliderButtonsContainer = styled.div`
  display: flex;
  padding-left: 172px;
  margin-bottom: 92px;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 25px;
  }
`;

export const CircularDiv = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 100%;
  background-color: #8ba726;
  position: absolute;
  top: 0;
  right: -50%;
`;

export const SliderImageRelativeContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const PartnersText = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: #421b00;
  padding-left: 172px;
  margin-bottom: 24px;
  z-index: 1;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 25px;
  }
`;

export const PartnerIconsLocation = styled.div`
  display: flex;
  align-items: center;
  padding-left: 172px;
  z-index: 1;
  margin-bottom: 152px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    margin-bottom: 24px;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 25px;
  }
`;

export const Icon = styled.div`
  margin-right: 62px;

  :last-of-type {
    margin-right: 0;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-right: 20px;
  }
`;

export const SliderFirstImageWrapper = styled.div<SliderAbsoluteContentWrapperProps>`
  transition: opacity 1s;

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
