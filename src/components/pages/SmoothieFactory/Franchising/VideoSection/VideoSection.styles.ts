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

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
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

export const VideoContainer = styled.div`
  position: relative;
`;
