import styled, { css } from 'styled-components';

import theme from '@styles/theme';

import type { CSSProp } from 'styled-components';

type ImageContainerProps = {
  isBottom?: boolean;
};

export const Container = styled.div`
  width: 100%;
  padding-top: 115px;
  position: relative;
  padding-bottom: 112px;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  padding: 84px 0 76px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffdb31;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    padding: 84px 0 204px 0;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding: 224px 0 240px 0;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 48px;
  color: #421b00;
  margin-bottom: 35px;
  z-index: 1;
`;

export const Text = styled.p`
  font-size: 52px;
  line-height: 71px;
  max-width: 784px;
  z-index: 1;
  text-align: center;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding: 0 25px;
  }
`;

export const CircularDiv = styled.div`
  position: absolute;
  right: 48%;
  bottom: -10%;
  width: 1200px;
  height: 1200px;
  border-radius: 100%;
  background-color: #ff9828;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  position: absolute;

  ${({ isBottom }): CSSProp => {
    if (isBottom) {
      return css`
        bottom: 0;
        left: 0;
        width: 250px;
        height: 313px;
      `;
    }

    return css`
      top: 0;
      right: -50px;
      width: 300px;
      height: 427px;
    `;
  }}
`;
