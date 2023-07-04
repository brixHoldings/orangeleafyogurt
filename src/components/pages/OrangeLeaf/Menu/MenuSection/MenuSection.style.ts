import styled from 'styled-components';

import theme from '@styles/theme';

import FloatingImage from '../../common/FloatingImage/FloatingImage';
import { maxDesktopContentWidth } from '@constants/sizes';

export const MenuPageMaxWidthWrapper = styled.div`
  max-width: ${maxDesktopContentWidth}px;
  padding-inline: 64px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    padding-inline: 24px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.762vw, 72px);
  margin-top: clamp(105px, 9.78vw, 148px);
  color: #421b00;
  text-align: center;
`;

export const FlavoursTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  color: #421b00;
  text-align: center;
  margin-bottom: clamp(40px, 4.23vw, 64px);
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 114px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: clamp(80px, 7.4vw, 112px);
`;

export const HeadlineWrapper = styled.div`
  position: relative;
  margin-bottom: clamp(208px, 18.91vw, 286px);
`;

export const FlavorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  row-gap: 100px;
  margin-bottom: min(28.04vw, 424px);
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    justify-content: space-around;
    row-gap: 250px;
  }
`;

export const NumberOfToppingsContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const SmoothiesAndShakes = styled.div`
  display: flex;
  width: 50%;
  max-width: 566px;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  margin-bottom: clamp(372px, 36.5vw, 552px);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 640px;
  }
`;

export const AcaiBowls = styled.div`
  display: flex;
  width: 50%;
  margin-left: auto;
  max-width: 566px;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  margin-bottom: clamp(372px, 36.5vw, 552px);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 640px;
  }
  &:last-of-type {
    margin-bottom: clamp(189px, 37.36vw, 565px);
    @media (max-width: ${theme.breakpoints.tablet}px) {
      margin-bottom: 230px;
    }
  }
`;

export const Cakes = styled.div`
  display: flex;
  width: 50%;
  margin-right: auto;
  max-width: 566px;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  margin-bottom: clamp(372px, 36.5vw, 552px);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 640px;
    padding-top: 35px;
  }
`;

export const SuperStarOfTheMonth = styled.div`
  width: 100%;
  display: flex;
  min-height: clamp(316px, 28.24vw, 427px);
  border: 5px solid #ff6034;
  border-radius: 16px;
  padding: clamp(25px, 2.38vw, 36px);
  margin-bottom: clamp(150px, 17.72vw, 268px);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 751px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 50%;
  margin-left: auto;
  width: 100%;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    max-width: 100%;
    margin-left: initial;
    margin-top: min(292px, 93.07vw);
  }
`;

export const FloatingCreamImage = styled(FloatingImage)`
  @media (max-width: ${theme.breakpoints.tablet}px) {
    transform: translate(59%, 56%);
    right: 0;
    bottom: 0;
    top: initial;
  }
`;

export const FloatingFroyoImage = styled(FloatingImage)`
  @media (max-width: ${theme.breakpoints.tablet}px) {
    transform: translateY(-26%);
    left: initial;
  }
`;

export const CardCircle = styled.div`
  position: absolute;
  left: -9%;
  width: clamp(542px, 51.25vw, 775px);
  height: clamp(542px, 51.25vw, 775px);
  top: -64%;
  z-index: -1;
  background: linear-gradient(180deg, #ff8a0c 0%, rgba(255, 152, 40, 0) 109.05%);
  border-radius: 50%;
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 27%), #fff 0);
  mask: radial-gradient(farthest-side, transparent calc(100% - 27%), #fff 0);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    left: initial;
    top: -24%;
  }
`;

export const SmoothiesAndShakesCircle = styled.div`
  position: absolute;
  right: -163%;
  width: clamp(618px, 58.46vw, 884px);
  height: clamp(618px, 58.46vw, 884px);
  top: -81%;
  z-index: -1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #d9d32f 0%, rgba(217, 211, 47, 0) 100%);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    left: initial;
    right: initial;
    top: max(-260%, -684px);
  }
`;

export const AcaiBowlsCircle = styled.div`
  position: absolute;
  left: -163%;
  width: clamp(618px, 58.46vw, 884px);
  height: clamp(618px, 58.46vw, 884px);
  top: -81%;
  z-index: -1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    left: initial;
    right: initial;
    top: -200%;
  }
`;

export const CakesCircle = styled.div`
  position: absolute;
  right: -163%;
  width: clamp(618px, 58.46vw, 884px);
  height: clamp(618px, 58.46vw, 884px);
  top: -81%;
  z-index: -1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    left: initial;
    right: initial;
    top: -200%;
  }
`;

export const ColoredBar = styled.div<{ color: string }>`
  position: absolute;
  top: -6%;
  left: 10%;
  width: clamp(307px, 29.03vw, 439px);
  height: clamp(627px, 59.25vw, 896px);
  background: linear-gradient(180deg, #ffdb31 0%, rgba(255, 219, 49, 0) 100%);
  ${({ color }): string => color};
  border-radius: 400px;
  z-index: -2;
  transform: rotate(180deg);
`;

export const RoundImage = styled(FloatingImage)<{ noBorder?: boolean }>`
  border-radius: 50%;
  overflow: hidden;
  ${({ noBorder }): string | null => (noBorder ? null : 'border: clamp(20px, 1.98vw, 30px) solid #ffffff;')}
`;

export const BigTitle = styled.h1`
  font-size: clamp(35px, 5.29vw, 80px);
  line-height: clamp(45px, 5.62vw, 86px);
  max-width: 750px;
  width: 100%;
  margin-bottom: 18px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    flex-direction: column;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  white-space: nowrap;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  padding: 19px 47px;
  background: #ff9828;
  box-shadow: 0px 0px 10px rgba(113, 49, 14, 0.3);
  border: none;
  border-radius: 2px 2px 20px 2px;
  color: #ffffff;
  cursor: pointer;
`;

export const TextTitle = styled.h1`
  font-size: clamp(24px, 2.64vw, 40px);
  line-height: clamp(32px, 3.7vw, 56px);
  margin-bottom: clamp(16px, 1.58vw, 24px);
`;

export const Paragraph = styled.p`
  font-size: clamp(11px, 1.05vw, 16px);
  line-height: clamp(22px, 2.11vw, 32px);
  margin-bottom: clamp(16px, 1.58vw, 24px);
`;

export const CardTitle = styled.h2`
  font-size: clamp(24px, 2.11vw, 32px);
  line-height: clamp(32px, 3.17vw, 48px);
  margin-bottom: clamp(11px, 1.05vw, 16px);
`;

export const CardParagraph = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(22px, 2.11vw, 32px);
`;

export const GrayArea = styled.div`
  position: relative;
  background-color: #f4f4f4;
  border-radius: 16px;
  padding: clamp(50px, 4.43vw, 67px) clamp(10px, 5.29vw, 80px);
  display: flex;
  flex: 1;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    justify-content: center;
  }
`;

export const NumberOfToppings = styled.h2`
  font-size: clamp(160px, 39.74vw, 601px);
  line-height: clamp(153px, 38.09vw, 576px);
  color: #29c3f7;
`;

export const ToppingsTitle = styled.h3`
  font-size: clamp(35px, 8.66vw, 131px);
  line-height: clamp(45px, 12.03vw, 182px);
  color: #421b00;
  text-align: center;
  transform: translateY(min(-68px, -4.49vw));
  margin-bottom: calc(clamp(356px, 45.56vw, 689px) + min(-68px, -4.49vw));
`;

export const Headline = styled.h1`
  font-size: clamp(88px, 22.28vw, 337px);
  line-height: clamp(94px, 24vw, 363px);
  color: #ff9e16;
  text-align: center;
  transform: translateY(-1.19vw);
`;

export const Caption = styled.span`
  font-size: clamp(14px, 1.58vw, 24px);
  line-height: clamp(22px, 2.64vw, 40px);
  text-align: center;
  display: inline-block;
  max-width: 826px;
  width: 100%;
  margin: auto;
`;

export const StyledMaxWidthWrapper = styled(MenuPageMaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderImagesWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 45%;
  z-index: 1;
  margin-inline: auto;
  gap: 6px;
  width: 100%;
  justify-content: center;
`;

export const HeaderImage = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const Circle = styled.div<{ align: 'bottom' | 'top'; color: string }>`
  width: clamp(195px, 25.79vw, 390px);
  height: clamp(195px, 25.79vw, 390px);
  position: absolute;
  ${({ align }): string | undefined => (align === 'top' ? `top: 2px;` : undefined)}
  ${({ align }): string | undefined => (align === 'bottom' ? `bottom: -12%;` : undefined)}
  background: ${({ color }: { color: string }): string => color};
  border-radius: 50%;
`;

export const GummyBears = styled(FloatingImage)`
  transform: rotate(180deg) translate(-10%, 33%);
  z-index: -1;
`;

export const LottieWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -132px;
  z-index: -10;
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    bottom: -40px;
  }
`;

export const RelativeWrapper = styled.div`
  position: relative;
  width: 100%;
`;
