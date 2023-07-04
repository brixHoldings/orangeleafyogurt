import styled from 'styled-components';
import theme from '@styles/theme';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

const maxWidth = '1153px';

export const Title = styled.h1`
  text-align: center;
  font-size: clamp(24px, 3.43vw, 52px);
  line-height: clamp(32px, 4.76vw, 72px);
  margin-bottom: clamp(16px, 3.9vw, 40px);
  @media only screen and (min-width: ${theme.breakpoints.desktop}px) {
    margin-bottom: 19px;
  }
`;

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 132px);
  padding-top: clamp(97px, 14.35vw, 147px);
  margin-inline: auto;
  position: relative;
  @media only screen and (min-width: ${theme.breakpoints.smallScreen}px) {
    width: min(calc(100vw - 64px), ${maxWidth});
  }
  @media only screen and (min-width: ${theme.breakpoints.desktop}px) {
    padding-top: clamp(147px, 13.29vw, 201px);
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    min-height: calc(100vh - 116px);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: clamp(16px, 3.12vw, 32px);
  @media only screen and (min-width: ${theme.breakpoints.desktop}px) {
    margin-bottom: clamp(32px, 6.15vw, 93px);
  }
`;

export const SubTitle = styled.h6`
  font-size: 24px;
  line-height: 40px;
  text-align: center;
`;

export const Cards = styled.div`
  width: min(calc(100vw - 108px), 967px);
  display: flex;
  justify-content: space-between;
  margin: auto;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: calc(100vw - 64px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  width: clamp(180px, 18.84vw, 285px);
  height: clamp(120px, 12.56vw, 190px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(66, 27, 0, 0.25);
  border-radius: 8px;
  padding: clamp(24px, 2.51vw, 38px) clamp(26px, 2.77vw, 42px);
`;

export const StyledFloatingImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    transform: translate(27.92vw, 9.27vw);
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    transform: translate(80vw, 9.27vw);
  }
  &::before {
    content: '';
    position: absolute;
    backdrop-filter: blur(15px);
    inset: 0;
    z-index: 1;
  }
`;

export const StyledFloatingYellowBarImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    transform: translate(0, -80%);
  }
`;
