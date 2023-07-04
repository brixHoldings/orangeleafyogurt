import styled, { css } from 'styled-components';

import theme from '@styles/theme';

import type { CSSProp } from 'styled-components';

import { ButtonOutlined } from '@components/pages/OrangeLeaf/common/ButtonOutlined/ButtonOutlined';

type VideoControlPops = {
  isVideoPlaying: boolean;
};

export const Container = styled.div<VideoControlPops>`
  position: relative;
  overflow: hidden;

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

export const VideoOverlayContainer = styled.div<VideoControlPops>`
  background: #cb333b;
  position: absolute;
  transition: opacity 0.5s ease;
  right: 0;
  bottom: 4px;
  width: 36%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 62px;
  padding-left: 62px;

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

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    border-radius: 0;
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

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    margin: 0;
    text-align: center;
  }
`;

export const VideoOverlayTitle = styled.h2`
  text-transform: uppercase;
  font-size: 52px;
  line-height: 72px;
  color: #ffffff;
  margin-bottom: 20px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const VideoOverlayQuote = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 48px;
`;

export const VideoContainer = styled.div`
  position: relative;
  margin-bottom: -5px;
`;

export const OrangeSection = styled.div<{ isVideoPlaying: boolean }>`
  width: 100%;
  max-width: 35.71%;
  height: 100%;
  background: rgba(255, 152, 40, 0.5);
  padding: clamp(40px, 11.44vw, 173px) clamp(25px, 4.43vw, 67px);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  border-bottom-left-radius: 400px;
  transition: opacity 0.5s ease;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    max-width: 52.73%;
  }
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    border-bottom-left-radius: 100px;
    position: initial;
    max-width: 100%;
    background: linear-gradient(180deg, #ff8a0c 0%, rgba(255, 152, 40, 0) 109.05%);
  }
  @media (min-width: calc(${theme.breakpoints.tablet}px)) {
    ${({ isVideoPlaying }): CSSProp => {
      if (isVideoPlaying) {
        return css`
          pointer-events: none;
          opacity: 0;
        `;
      }

      return css`
        opacity: 1;
      `;
    }};
  }
`;

export const OrangeSectionWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const VideoTitle = styled.h1`
  font-size: clamp(24px, 3.43vw, 52px);
  line-height: clamp(32px, 4.76vw, 72px);
  margin-bottom: clamp(24px, 2.11vw, 32px);
  color: #ffffff;
  text-align: right;
`;

export const VideoText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(22px, 2.11vw, 32px);
  font-weight: 400;
  margin-bottom: clamp(16px, 1.45vw, 22px);
  text-align: right;
  color: #ffffff;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    color: #421b00;
  }
`;

export const VideoButtonOutlined = styled(ButtonOutlined)`
  display: none;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    display: initial;
  }
`;

export const VideoButton = styled.button`
  font-size: 16px;
  line-height: 21px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 15px 27px;
  background: transparent;
  border: 2px solid #ff6034;
  border-radius: 2px 2px 20px 2px;
  cursor: pointer;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    display: none;
  }
`;
