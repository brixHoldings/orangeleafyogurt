import NextImage from 'next/image';
import styled from 'styled-components';

import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';

export const Container = styled(MaxWidthWrapper)`
  display: flex;
  position: relative;
  margin-bottom: clamp(125px, 12.63vw, 191px);
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    flex-direction: column;
    padding: 0;
    gap: 30px;
  }
`;

export const SideImage = styled.div`
  width: clamp(424px, 36.5vw, 552px);
  min-height: clamp(472px, 34.12vw, 516px);
  height: 100%;
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  position: relative;
  overflow: hidden;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    margin-left: auto;
    height: 400px;
    min-height: initial;
    width: calc(100% - 32px);
  }
`;

export const SideText = styled.div`
  padding: 56px;
  flex: 1;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f4f4f4;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    margin-right: auto;
    width: calc(100% - 32px);
  }
`;

export const TinyTitle = styled.span`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: clamp(24px, 2.11vw, 32px);
  line-height: clamp(32px, 3.17vw, 48px);
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(22px, 2.11vw, 32px);
  margin-bottom: 16px;
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    margin-bottom: 24px;
  }
`;

export const SplashImage = styled(NextImage)`
  position: absolute;
  top: -156px;
  right: -88px;
`;

export const MainTitle = styled.h1`
  position: relative;
  z-index: 1;
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  text-align: center;
  margin-bottom: clamp(30px, 3.24vw, 49px);
`;
