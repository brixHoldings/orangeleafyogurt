import styled from 'styled-components';

import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

export const HeaderBg = styled.section`
  width: 100%;
  height: clamp(670px, 54.96vw, 831px);
  margin-bottom: clamp(38px, 10.84vw, 164px);
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    height: clamp(393px, 65.42vw, 670px);
  }
  @media (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 192px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 0px 0px 0px 200px;
`;

export const HeaderPaper = styled.div`
  width: clamp(631px, 51.78vw, 783px);
  background: #ffffff;
  border-radius: 0px 0px 60px 60px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  padding: clamp(94px, 16.26vw, 246px) clamp(25px, 8.99vw, 136px) clamp(122px, 15.14vw, 229px)
    clamp(19px, 15.14vw, 95px);
  align-items: flex-start;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    width: 100%;
    min-height: initial;
  }
  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding: 94px 25px 122px 19px;
  }
`;

export const HeaderPaperWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

export const HeaderTitle = styled.h1`
  font-size: clamp(35px, 4.62vw, 70px);
  line-height: clamp(45px, 5.82vw, 88px);
  margin-bottom: clamp(16px, 1.58vw, 24px);
  color: #421b00;
`;

export const HeaderText = styled.p`
  max-width: 552px;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(22px, 2.11vw, 32px);
  color: #421b00;
  margin-bottom: clamp(16px, 1.58vw, 24px);
`;

export const Button = styled.button`
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
  align-items: flex-start;
`;

export const GiftCardsMaxWidthWrapper = styled(MaxWidthWrapper)`
  padding-inline: 133px;
  position: relative;
  z-index: 20;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-inline: 114px;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    padding-inline: 31px;
  }
`;

export const YellowBar = styled.div`
  pointer-events: none;
  position: absolute;
  top: 30%;
  right: 2%;
  width: clamp(222px, 16.53vw, 250px);
  height: 745px;
  background: linear-gradient(180deg, #ffdb31 0%, rgba(255, 219, 49, 0) 100%);
  border-radius: 300px;
  z-index: 1;
  @media (max-width: ${theme.breakpoints.mobile}px) {
    top: 38%;
    right: -29%;
  }
`;

export const ChoseFromMultipleDesigns = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  margin-bottom: 24px;
  max-width: clamp(383px, 41.4vw, 626px);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 54px;
  }
`;

export const Cards = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 330px;
`;

export const CircleRelativeWRapper = styled.div`
  position: absolute;
  top: 32%;
  right: -33%;
  width: clamp(337px, 42.46vw, 642px);
  height: clamp(191px, 24.2vw, 366px);

  border-radius: 22.3616px;
  z-index: -1;
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    position: relative;
    top: initial;
    right: initial;
    margin-left: auto;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  z-index: 10;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 35px;
  }
`;

export const FloatingCard = styled.div`
  transform: rotate(-34.24deg);
  height: clamp(191px, 24.2vw, 366px);
  width: clamp(336px, 42.46vw, 642px);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    transform: initial;
    margin-right: auto;
  }
`;

export const FloatingShakeImage = styled(FloatingImage)`
  z-index: -2;
  &:before {
    content: '';
    position: absolute;
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    inset: 0;
    z-index: 1;
  }
  @media (max-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const AlreadyHaveAGiftCardWrapper = styled(MaxWidthWrapper)`
  position: relative;
  max-width: 1332px;
  display: flex;
  justify-content: center;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-inline: 32px;
  }
`;

export const PinkBg = styled.div`
  width: 100%;
  position: relative;
  z-index: 20;
  margin-bottom: clamp(169px, 16.26vw, 246px);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 169px;
  }
`;

export const FloatingIconImage = styled(FloatingImage)`
  right: initial;
  position: absolute;
  top: calc(clamp(72px, 9.85vw, 149px) / -2);
`;

export const AlreadyHaveAGiftCard = styled.div`
  background: #ffffff;
  padding: clamp(84px, 6.87vw, 104px) clamp(28px, 8.2vw, 124px) clamp(48px, 6.34vw, 96px) clamp(28px, 8.2vw, 124px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AlreadyHaveAGiftCardTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  color: #ffdb31;
  margin-bottom: 16px;
  text-align: center;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 32px;
  }
`;

export const AlreadyHaveAGiftCardText = styled.p`
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: clamp(24px, 2.64vw, 40px);
  line-height: clamp(40px, 3.5vw, 53px);
  margin-bottom: 16px;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 32px;
  }
`;

export const LottieWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  @media (max-width: ${theme.breakpoints.mobile}px) {
    bottom: 8%;
  }
`;
