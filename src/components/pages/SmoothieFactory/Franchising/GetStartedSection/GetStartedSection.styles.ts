import styled from 'styled-components';

import theme from '@styles/theme';

export const HowToContainer = styled.div`
  padding-bottom: 65px;
  padding-top: 165px;
  background: #fff5cd;
  background-image: url('/images/sf-blob2.png');
  background-image: url('/images/sf-blob2.png'),
    linear-gradient(to bottom, #fff 0, #fff 100px, #fff5cd 100px, #fff5cd 100%);
  background-position: top right;
  background-repeat: no-repeat;
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
  padding: 0 172px 0 172px;

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
  padding: 200px 25px 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('/images/sf-leaf.png') left 0 bottom -80px, url('/images/sf-blob.png') left 0 top -520px;
  background-color: #f69f24;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 120px 25px 60px;
  }
`;

export const PromotionTitle = styled.h2`
  font-size: 52px;
  line-height: 60px;
  margin-bottom: 36px;
  text-align: center;
  text-transform: uppercase;
  color: #ed6c32;
`;

export const PromotionDescription = styled.p`
  font-size: 40px;
  line-height: 54px;
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
  font-family: 'Lucida Grande';
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

export const MilitaryContainer = styled.div`
  position: relative;
  background-color: #98c44a;
`;

export const MilitaryContent = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 256px;
  padding-right: 256px;
  background-color: #ffffff;
  border-bottom-left-radius: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    flex-direction: column;
    padding-left: 172px;
    padding-right: 172px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const MilitaryTitle = styled.h2`
  font-size: 60px;
  line-height: 52px;
  width: 370px;
  color: #f69f24;
  margin-right: 220px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    margin-bottom: 40px;
    margin-right: 0;
    width: 100%;
    text-align: center;
  }
`;

export const MilitaryDescription = styled.p`
  font-size: 42px;
  line-height: 42px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    text-align: center;
  }
`;
