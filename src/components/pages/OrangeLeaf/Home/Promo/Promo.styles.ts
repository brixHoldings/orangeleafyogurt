import styled from 'styled-components';

import theme from '@styles/theme';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: clamp(171px, 21.75vw, 329px);
  justify-content: center;
`;

export const JoinClubContainer = styled.div`
  width: 81.01%;
  background-color: #ff9828;
  padding: clamp(67px, 7.87vw, 119px) clamp(32px, 7.01vw, 106px) clamp(61px, 5.68vw, 86px) clamp(32px, 7.01vw, 106px);
  margin-bottom: clamp(53px, 4.29vw, 65px);
  border-top-left-radius: 200px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 318px;
  margin-left: auto;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    width: calc(100% - 32px);
    border-top-left-radius: 100px;
    margin-bottom: 0;
    align-items: center;
    min-height: 300px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  line-height: 13px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 35px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(113, 49, 14, 0.3);
  border: none;
  color: #ff6034;
  font-family: var(--century-gothic);
  cursor: pointer;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    flex-direction: column;
  }
`;
export const ClubMailIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc(clamp(64px, 8.79vw, 133px) / -2);
  left: 50%;
`;

export const Title = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
`;

export const Subtitle = styled.p`
  text-align: right;
  font-size: clamp(14px, 1.19vw, 18px);
  line-height: clamp(22px, 2.11vw, 32px);
`;

export const CardSubtitle = styled(Subtitle)`
  text-align: left;
`;

export const GiftCardContainer = styled.div`
  width: 91.66%;
  align-self: flex-start;
  background-color: #f4f4f4;
  min-height: 318px;
  padding: clamp(67px, 7.87vw, 119px) clamp(32px, 7.01vw, 106px) clamp(61px, 5.68vw, 86px) clamp(32px, 7.01vw, 106px);
  border-radius: 0 100px 100px 0;
  display: flex;
  z-index: 1;
  position: relative;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    width: calc(100% - 32px);
    min-height: 300px;
    justify-content: center;
  }
`;

export const MainContentWrapper = styled.div`
  margin-right: clamp(24px, 2.18vw, 33px);
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    margin-right: auto;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
`;

export const CardPalaceHolder = styled.div`
  position: relative;
`;

export const CardContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  width: clamp(329px, 30.42vw, 460px);
  height: clamp(187px, 17.32vw, 262px);
  border-radius: 16px;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    left: initial;
    top: 100%;
    transform: translate(16px, -140px);
  }
`;

export const FloatingCakeImage = styled(FloatingImage)`
  top: initial;
  bottom: initial;
  left: initial;
  right: 0;
  transform: translateX(6px);
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
  }
`;
