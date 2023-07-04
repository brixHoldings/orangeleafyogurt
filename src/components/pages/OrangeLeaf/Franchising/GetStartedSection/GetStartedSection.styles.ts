import styled from 'styled-components';

import theme from '@styles/theme';

export const OptionsContainer = styled.div`
  background-color: #f4f4f4;
  padding: 65px 25px 0 25px;
  gap: 43px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 65px 0 0;
    background-color: #ffffff;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding-top: 50px;

    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 52px;
  line-height: 72px;
  background-color: #f4f4f4;
  text-align: center;
  margin-bottom: 38px;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    background-color: #ffffff;
  }
`;

export const Column = styled.div`
  max-width: 530px;

  &:first-of-type {
    transform: translateY(36px);
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    max-width: 100%;
    margin-bottom: 32px;
    flex-direction: column;
    display: flex;
    align-items: center;
    transform: initial;
    > div {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    > div {
      padding: 48px 20px;
      width: calc(100% - 40px);
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  margin-bottom: 32px;
  width: 100%;

  > div {
    margin-left: 20px;
    width: 330px;
  }
`;

export const CardHeaderTitle = styled.h3`
  font-size: 32px;
  line-height: 34px;
  margin-bottom: 8px;
`;

export const CardText = styled.p`
  font-size: 18px;
  line-height: 32px;
`;

export const CardPoint = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-left: 4px;

  :last-of-type {
    margin-bottom: 0;
  }

  > svg {
    margin-top: 10px;
  }

  > div {
    margin-left: 20px;
  }

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    :nth-last-of-type(2) {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    :nth-last-of-type(2) {
      margin-bottom: 40px;
    }

    width: calc(100% - 44px);
  }
`;

export const CardPointTitle = styled.h4`
  font-size: 24px;
  line-height: 32px;
`;

export const PromotionContainer = styled.div`
  padding: 146px 25px 0;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #ff9828;
  background-image: url('/images/promo-bg.png');
  background-repeat: no-repeat;
  background-position: center left;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 120px 25px 60px;
    background-position: top left;
    background-size: 25%;
  }
`;

export const PromotionTitle = styled.h2`
  font-size: 120px;
  line-height: 114px;
  margin-bottom: 72px;
  text-align: center;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 52px;
    line-height: 72px;
    margin-bottom: 52px;
  }
`;

export const PromotionSubtitle = styled.h3`
  font-size: 40px;
  line-height: 49px;
  text-align: center;
`;

export const PromotionDescription = styled.p`
  font-size: 40px;
  line-height: 49px;
  max-width: 930px;
  text-align: center;
`;

export const PromoOptions = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    text-align: center;
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const PromotionOptionTitle = styled.h4`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 2px;
`;

export const PromotionOptionDescription = styled.p`
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
`;

export const LineSeparator = styled.div`
  border: 1px solid #ffffff;
  margin: 48px 56px;
  height: 144px;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    height: 0;
    width: 144px;
    margin: 20px 0;
  }
`;

export const Flag = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    top: unset;
    bottom: -160px;
  }
`;

export const MilitaryContainer = styled.div`
  position: relative;
  background-color: #d9d32f;
`;

export const MilitaryContent = styled.div`
  padding-top: 64px;
  padding-bottom: 92px;
  padding-left: 256px;
  background-color: #ffffff;
  border-bottom-left-radius: 140px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    padding-left: 172px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 160px;
    background-position: bottom right;
  }
`;

export const MilitaryTitle = styled.h2`
  font-size: 60px;
  line-height: 52px;
  width: 520px;
  margin-bottom: 40px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: 100%;
    text-align: center;
  }
`;

export const MilitaryDescription = styled.p`
  font-size: 42px;
  line-height: 42px;
  width: 630px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    width: 565px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: 100%;
    text-align: center;
  }
`;
