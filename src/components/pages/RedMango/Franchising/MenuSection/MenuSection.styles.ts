import styled, { css } from 'styled-components';

import theme from '@styles/theme';

import type { CSSProp } from 'styled-components';

type SliderButtonProps = {
  isActive: boolean;
  onClick: () => void;
};

type SliderAbsoluteContentWrapperProps = {
  isActive: boolean;
};

export const Container = styled.div`
  position: relative;
  padding-top: 28px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    padding-top: 28px;
  }
`;

export const CopyrightContainer = styled.div`
  padding-left: 172px;
  display: flex;
  margin-bottom: 62px;
  z-index: 1;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 25px;
  }
`;

export const CopyrightTitle = styled.h2`
  font-size: 52px;
  line-height: 72px;
  text-transform: uppercase;
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
        background-color: #cb333b;
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
  top: 0%;
  bottom: 0%;
  right: 0;
  width: 28%;
  background-color: white;
  padding: 50px 50px 0 50px;
  display: flex;
  flex-direction: column;
  text-align: end;
  background-color: transparent;
  background-image: url('/images/MenuSectionImageVector.png');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    position: relative;
    padding: 30px 25px;
    width: unset;
  }
`;

export const SliderImageContentMainText = styled.p`
  min-width: 60%;
  font-size: 18px;
  line-height: 32px;
`;

export const SliderImageContentTitleContainer = styled.div`
  position: relative;
`;

export const SliderImageContentTitle = styled.h2`
  font-size: 70px;
  line-height: 88px;
  color: #cb333b;
  margin-bottom: 28px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    font-size: 36px;
    line-height: 40px;
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

export const CircularImage = styled.img`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    width: 80%;
  }
`;

export const SliderImageRelativeContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
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
