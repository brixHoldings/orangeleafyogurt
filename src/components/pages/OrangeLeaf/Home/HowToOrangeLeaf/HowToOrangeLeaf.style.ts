import styled from 'styled-components';

import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';

export const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  margin-top: clamp(78px, 12.43vw, 188px);
  flex-direction: column;
  position: relative;
  z-index: 1;
  margin-bottom: 33px;
`;

export const Title = styled.h1`
  font-size: clamp(32px, 4.62vw, 70px);
  line-height: clamp(48px, 5.822vw, 88px);
  text-align: center;
  margin-bottom: 17px;
`;

export const Subtitle = styled.span`
  font-size: clamp(24px, 2.38vw, 36px);
  line-height: 32px
  text-align: center;
  color: #ff6034;
`;

export const Circle = styled.div`
  width: 100%;
  height: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 913px;
  max-height: 913px;
  margin: auto;
  border-radius: 50%;
  background: linear-gradient(180deg, #ff9e16 0%, rgba(255, 158, 22, 0) 100%);
`;

export const ImageOuterWrapper = styled.div`
  height: 74.15%;
  width: 54.87%;
  top: min(3.37vw, 51px);
  position: absolute;
`;

export const LottieRotatingWords = styled.div`
  height: clamp(125px, 15.41vw, 233px);
  width: clamp(125px, 15.41vw, 233px);
  position: absolute;
  right: -1%;
  top: 7%;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    right: 4%;
    top: 1%;
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Card = styled.div`
  padding: clamp(28px, 1.85vw, 38px) 32px clamp(64px, 12.3vw, 186px) 32px;
  background: #fff;
  position: absolute;
  bottom: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardText = styled.span`
  font-size: clamp(18px, 2.11vw, 32px);
  line-height: clamp(32px, 3.17vw, 48px);
  max-width: 675px;
  text-align: center;
  display: block;
`;
