import styled from 'styled-components';

import FormButton from '@components/pages/OrangeLeaf/common/Button';
import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

export const WeAreExperienceSection = styled(MaxWidthWrapper)`
  margin-top: clamp(252px, 19.24vw, 291px);
  padding-inline: clamp(118px, 11.77vw, 178px);
  position: relative;
  margin-bottom: clamp(232px, 38.55vw, 583px);
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    padding-inline: 32px;
  }
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    margin-top: max(106.87vw, 420px);
  }
`;

export const WeAreExperienceTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  margin-bottom: 24px;
  max-width: clamp(383px, 41.4vw, 626px);
`;

export const WeAreExperienceText = styled.p`
  max-width: clamp(383px, 39.88vw, 603px);
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(22px, 2.11vw, 32px);
  text-align: center;
  margin-bottom: 24px;
`;

export const RelativeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const GreenCircle = styled.div`
  position: absolute;
  left: 57%;
  top: -8%;
  border-radius: 50%;
  background: linear-gradient(180deg, #a4d55d 0%, rgba(164, 213, 93, 0) 100%);
  width: clamp(349px, 55.02vw, 832px);
  height: clamp(349px, 55.02vw, 832px);
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    left: initial;
    top: max(-324px, -128%);
    right: -21%;
  }
`;

export const SmallGreenCircle = styled.div`
  position: absolute;
  left: -9%;
  bottom: -202%;
  border-radius: 50%;
  background: #ff9e16;
  width: clamp(162px, 27.91vw, 422px);
  height: clamp(162px, 27.91vw, 422px);
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    bottom: -116%;
  }
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    bottom: -90%;
  }
`;

export const GreenCircleRelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const FloatingHeaderImage = styled(FloatingImage)`
  transform: translateY(-6%);
  top: initial;
`;

export const OurPurposeSection = styled.section`
  width: 100%;
  min-height: clamp(478px, 51.38vw, 777px);

  padding: 32px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const OurPurposeTitle = styled.h5`
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 15px;
  text-align: center;
  text-transform: capitalize;
  font-family: var(--century-gothic);
`;

export const OurPurposeText = styled.p`
  font-weight: 400;
  font-size: clamp(28px, 3.43vw, 52px);
  line-height: clamp(38px, 4.69vw, 71px);
  text-align: center;
  max-width: clamp(329px, 48.34vw, 731px);
`;

export const FloatingGummyWorms = styled(FloatingImage)`
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    transform: translate(37%, 0);
  }
`;

export const VideoSection = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const VideoSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: clamp(393px, 48.74vw, 737px);
  z-index: 1;
  margin-bottom: 120px;
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    margin-bottom: 50px;
    height: auto;
  }
`;

export const BigTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  margin-bottom: clamp(29px, 6.41vw, 97px);
  color: #421b00;
  text-align: center;
  margin-top: clamp(50px, 7.93vw, 120px);
`;

export const WeAreHereSection = styled.section`
  display: flex;
  width: 100%;
  gap: 13px;
  height: 373px;
  margin-bottom: 39px;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 46px;
  }
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    flex-direction: column;
    height: auto;
    gap: 8px;
    margin-bottom: 52px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  max-width: 42%;
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    max-width: 100%;
    height: 156px;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  max-width: 58%;
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    max-width: 100%;
    height: 156px;
  }
`;

export const BannersMaxWidthWrapper = styled(MaxWidthWrapper)`
  padding-inline: 32px;
`;

export const Banners = styled.div`
  display: flex;
  width: 100%;
  max-width: 1138px;
  gap: 29px;
  margin-left: auto;
  margin-bottom: clamp(81px, 12.83vw, 194px);
  align-items: flex-start;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    flex-direction: column;
    gap: 49px;
    margin-left: initial;
  }
`;

export const BannerTitle = styled.h2`
  font-size: clamp(24px, 2.11vw, 32px);
  line-height: clamp(32px, 3.17vw, 48px);
  margin-bottom: 16px;
  color: #421b00;
`;

export const BannerText = styled.p`
  font-weight: 400;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(22px, 2.11vw, 32px);
  color: #421b00;
`;

export const Banner = styled.div<{
  background: string;
  paddingBottom: string;
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: clamp(24px, 3.17vw, 48px) clamp(24px, 3.17vw, 48px) 0 clamp(24px, 3.17vw, 48px);
  background: ${({ background }): string => background};
  border-radius: 0px 0px 200px 200px;
  &:nth-of-type(1) {
    padding-bottom: clamp(91px, 9.25vw, 140px);
    margin-bottom: 99px;
  }
  &:nth-of-type(2) {
    padding-bottom: 80px;
  }
  &:nth-of-type(3) {
    padding-bottom: 120px;
  }

  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    border-radius: 0px 0px 100px 100px;
    &:nth-of-type(1) {
      padding-bottom: 102px;
    }
    &:nth-of-type(2) {
      padding-bottom: 157px;
    }
    &:nth-of-type(3) {
      padding-bottom: 225px;
    }
  }
`;

export const FloatingCreamImage = styled(FloatingImage)`
  transform: translate(-119%, -1%) rotate(180deg);
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    bottom: 0;
    left: 0;
    top: initial;
    right: initial;
    transform: translateY(100%);
  }
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    bottom: 0;
    left: 0;
    top: initial;
    right: initial;
    transform: translate(5%, 68%) rotate(180deg);
  }
`;

export const LottieRotatingWords = styled.div`
  height: clamp(125px, 15.41vw, 233px);
  width: clamp(125px, 15.41vw, 233px);
  position: absolute;
  left: 9%;
  top: -11%;
`;

export const Form = styled.form`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 28px;
  row-gap: 24px;
  grid-auto-rows: max-content;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    column-gap: 24px;
    row-gap: 24px;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const FormTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  margin-bottom: 24px;
`;

export const FormBg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 153px;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 270px;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    margin-bottom: 256px;
  }
`;

export const Paper = styled.div`
  background: #ffffff;
  width: 100%;
  position: relative;
  max-width: clamp(960px, 76.25vw, 1153px);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 10px rgba(66, 27, 0, 0.25);
  border-radius: 29px;
  padding: clamp(30px, 7.4vw, 112px) clamp(32px, 3.7vw, 56px) clamp(72px, 6.21vw, 94px) clamp(32px, 3.7vw, 56px);
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    flex-direction: column;
    gap: 0;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div<{ stretch?: boolean }>`
  display: flex;
  flex-direction: column;
  grid-column: ${({ stretch }): string => (stretch ? '1/-1' : 'initial')};
  @media (max-width: ${theme.breakpoints.mobile}px) {
    max-width: initial;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormButtonInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.mobile}px) {
    max-width: initial;
  }
`;

export const TextAreaInput = styled.textarea`
  border: 1px solid #421b00;
  border-radius: 4px;
  padding: 9px 24px 5px 24px;
  outline: 0;
  font-size: 18px;
  line-height: 32px;
  width: 100%;
  min-height: 82px;
  color: #421b00;
  &:placeholder {
    color: #421b00;
    opacity: 0.5;
  }
  &[data-has-error='true'] {
    border: 1px solid #ff0000;
  }
`;

export const FloatingGummyWormsImage = styled(FloatingImage)`
  @media (max-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const MeetOurTeam = styled.section`
  position: relative;
  width: 100%;
  padding-inline: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: clamp(169px, 14.21vw, 215px);
  @media (max-width: ${theme.breakpoints.mobile}px) {
    margin-bottom: 167px;
  }
`;

export const MeetOurTeamTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  margin-bottom: clamp(21px, 2.18vw, 33px);
  text-align: center;
`;

export const MeetOurTeamButton = styled(FormButton)`
  background-color: #8ba726;
  border: none;
`;

export const FloatingMeetOurTeamImage = styled(FloatingImage)`
  @media (max-width: ${theme.breakpoints.tablet}px) {
    transform: translate(-17%, -92%);
  }
`;

export const Error = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #ff0000;
`;

export const LottyWrapper = styled.div`
  position: absolute;
  inset: 0;
`;

export const FormLottyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -25%;
`;
