import styled, { keyframes } from 'styled-components';

import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';

const cardWidth = '368px';

const translateinfinite = keyframes`
	100% { transform:translateX(calc(-${cardWidth} * 5));  }
`;

export const Slider = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Barrier = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Lane = styled.ul`
  display: flex;
  gap: 24px;
  grid-gap: 24px;
  width: 100%;
  padding: 0;
`;

export const Item = styled.li`
  padding: 16px;
  border-radius: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: ${cardWidth};
  animation: ${translateinfinite} 50s linear infinite;
  border: 1px solid #ffdb31;
  &:nth-of-type(2n) {
    border-color: #d9d32f;
  }

  &:nth-of-type(3n) {
    border-color: #ffdb31;
  }
  &:nth-of-type(3n) {
    border-color: #ff6034;
  }
`;

export const Photo = styled.div`
  height: 312px;
  width: 312px;
  position: relative;
`;

export const Logo = styled.div`
  background-color: #fff;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  position: absolute;
  bottom: -60px;
  left: 20px;
`;

export const PhotoTitle = styled.span`
  font-size: 20px;
  margin-top: 12px;
  align-self: baseline;
  margin-left: 132px;
`;

export const PhotoDescription = styled.span`
  padding: 36px 16px 8px 16px;
  font-size: 14px;
  line-height: 21px;
`;

export const TextContainer = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: center;
`;

export const FollowUs = styled.h3`
  font-size: 24px;
  line-height: 32px;
  margin-right: 17px;
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    margin-bottom: 13px;
    margin-right: 0;
  }
`;

export const Title = styled.h2`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  text-align: center;
  margin: auto;
  margin-bottom: 4px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 32px;
  text-align: left;
  margin-bottom: clamp(14px, 2.57vw, 39px);
`;

export const SocialLinks = styled(MaxWidthWrapper)`
  margin-top: 40px;
  margin-bottom: 196px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 229px;
  }
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    margin-bottom: 165px;
  }
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin-left: 16px;
`;

export const SocialLinksInnerWrapper = styled.div`
  display: flex;
`;
