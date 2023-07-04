import styled from 'styled-components';

import theme from '@styles/theme';

export const HowToContainer = styled.div`
  padding-bottom: 114px;
  padding-top: 114px;
  background: url('/images/rm-howto-bg.png') top left;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const OptionsContainer = styled.div`
  padding: 65px 25px 0 25px;

  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 65px 0 0;
  }

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    padding-top: 50px;

    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 52px;
  line-height: 72px;
  padding: 65px 172px 0 172px;
  text-align: center;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 65px 25px 0 25px;
  }
`;

export const Column = styled.div`
  margin: auto;
  max-width: 530px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    max-width: 100%;
    margin-bottom: 32px;
    display: flex;

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

    width: 49%;
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
  background: url('/images/rm-promo.png') left -255px center, url('/images/rm-promo2.png') right -325px center;
  background-color: #cb333b;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    background: url('/images/rm-promo.png') center top -285px, url('/images/rm-promo2.png') bottom -355px left -250px;
    background-color: #cb333b;
    background-repeat: no-repeat;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    background: url('/images/rm-promo.png') center top -325px, url('/images/rm-promo2.png') bottom -385px left -250px;
    background-color: #cb333b;
    background-repeat: no-repeat;

    padding: 120px 25px 60px;
  }
`;

export const PromotionTitle = styled.h2`
  font-size: 120px;
  line-height: 114px;
  margin-bottom: 72px;
  text-align: center;
  color: white;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 52px;
    line-height: 72px;
    margin-bottom: 52px;
  }
`;

export const PromotionSubtitle = styled.h3`
  font-family: 'Variable Black';
  font-size: 40px;
  line-height: 49px;
  text-align: center;
  color: white;
`;

export const PromotionDescription = styled.p`
  font-size: 40px;
  line-height: 49px;
  max-width: 930px;
  text-align: center;
  color: white;
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
  color: white;
`;

export const PromotionOptionDescription = styled.p`
  font-family: 'Futura';
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
  background-color: #cb333b;
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
