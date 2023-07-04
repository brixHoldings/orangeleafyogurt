import styled, { css } from 'styled-components';

import theme from '@styles/theme';

import type { CSSProp } from 'styled-components';

type VideoControlPops = {
  isVideoPlaying: boolean;
};

export const Container = styled.div<VideoControlPops>`
  position: relative;
  overflow: hidden;
  margin-bottom: -5px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 0;
  }

  ${({ isVideoPlaying }): CSSProp => {
    if (isVideoPlaying) {
      return css`
        cursor: pointer;
      `;
    }

    return css``;
  }};
`;

export const PlayButton = styled.button<VideoControlPops>`
  background: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 129px;
  width: 129px;
  position: absolute;
  left: calc(50% - calc(129px / 2));
  top: calc(50% - calc(129px / 2));
  z-index: 1;
  transition: opacity 0.5s ease;

  ${({ isVideoPlaying }): CSSProp => {
    if (isVideoPlaying) {
      return css`
        opacity: 0;
      `;
    }

    return css`
      opacity: 1;
    `;
  }};

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
  }
`;

export const PlayIndicator = styled.svg`
  position: absolute;
  top: calc(50% - calc(58px / 2));
  left: calc(50% - 20px);
`;

export const PlayCircle = styled.svg`
  position: absolute;
  top: calc(50% - calc(129px / 2));
  left: calc(50% - calc(129px / 2));
`;

export const PauseButton = styled.button<VideoControlPops>`
  background: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 101px;
  width: 101px;
  position: absolute;
  right: 24px;
  bottom: 24px;
  z-index: 1;
  transition: opacity 0.5s ease;

  ${({ isVideoPlaying }): CSSProp => {
    if (isVideoPlaying) {
      return css`
        opacity: 1;
      `;
    }

    return css`
      opacity: 0;
    `;
  }};
`;

export const PauseIndicator1 = styled.svg`
  position: absolute;
  top: calc(50% - calc(56px / 2));
  left: calc(50% - 25px);
`;

export const PauseIndicator2 = styled.svg`
  position: absolute;
  top: calc(50% - calc(56px / 2));
  left: calc(50% - 5px);
`;

export const PauseCircle = styled.svg`
  position: absolute;
  top: calc(50% - calc(101px / 2));
  left: calc(50% - calc(101px / 2));
`;

export const VideoOverlayContainer = styled.div<VideoControlPops>`
  background: #ff9828;
  position: absolute;
  border-radius: 50%;
  transition: opacity 0.5s ease;
  top: -650px;
  right: -650px;
  width: 1300px;
  height: 1300px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    top: -520px;
    right: -520px;
    width: 1040px;
    height: 1040px;
  }

  ${({ isVideoPlaying }): CSSProp => {
    if (isVideoPlaying) {
      return css`
        opacity: 0;
      `;
    }

    return css`
      opacity: 1;
    `;
  }};

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    border-radius: 0;
    border-bottom-left-radius: 140px;
    transition: unset;
    padding: 40px 40px 44px;
    margin-top: -5px;

    position: relative;
    opacity: 1;

    top: unset;
    right: unset;
    width: unset;
    height: unset;
  }
`;

export const VideoOverlayContent = styled.div`
  text-align: right;

  margin: 750px 700px 0 200px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    margin: 565px 555px 0 100px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin: 0;
  }
`;

export const VideoOverlayTitle = styled.h2`
  font-size: 52px;
  line-height: 72px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const VideoOverlayQuote = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const VideoContainer = styled.div`
  position: relative;
`;
