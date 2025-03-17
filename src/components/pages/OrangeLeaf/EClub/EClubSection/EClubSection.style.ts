import styled from 'styled-components';

import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

export const StyledFloatingImage = styled(FloatingImage)`
  z-index: -1;
  border-bottom-left-radius: 160px;
  overflow: hidden;
  .image {
    object-fit: cover !important;
  }
  @media (min-width: ${theme.breakpoints.mobile}px) and (max-width: ${theme.breakpoints.smallScreen}px) {
    transform: translate(24.41vw, 0);
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    transform: translate(0px, 0px);
    width: 100vw;
    top: 0;
    right: 0;
    height: max(136.13vw, 534px);
    .image-wrapper {
      height: 100%;
      width: 100%;
    }
  }
`;

export const StyledFloatingBirthdayCakes = styled(FloatingImage)`
  border-radius: 50%;
  overflow: hidden;
  z-index: -2;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    transform: translate(-50%, clamp(566px, 82.12vw, 841px));
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    transform: translate(-30%, clamp(566px, 82.12vw, 841px));
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: calc(clamp(135px, 18.18vw, 275px) + clamp(90px, 8.86vw, 134px));
`;

export const HeaderBox = styled(MaxWidthWrapper)`
  margin-top: clamp(86px, 11.77vw, 178px);
  display: flex;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-inline: 0 32px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(35px, 4.62vw, 70px);
  line-height: clamp(45px, 5.82vw, 88px);
  margin-bottom: clamp(1px, 1.58vw, 24px);
  color: #421b00;
`;

export const AppButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: ${theme.breakpoints.mobile}px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Title2 = styled.h2`
  font-size: clamp(24px, 3.43vw, 52px);
  line-height: clamp(32px, 4.76vw, 72px);
  margin-bottom: clamp(24px, 2.11vw, 32px);
`;

export const TitleCentered = styled(Title2)`
  text-align: center;
  margin-bottom: 34px;
`;

export const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1306px;
  margin-bottom: 115px;
  @media (max-width: ${theme.breakpoints.mobile}px) {
    flex-direction: column;
    gap: 72px;
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

export const StepLabel = styled.h3`
  font-size: clamp(24px, 2.11vw, 32px);
  line-height: clamp(32px, 3.17vw, 48px);
  text-transform: capitalize;
  text-align: center;
`;

export const Number = styled.span<{ color: string }>`
  pointer-events: none;
  display: flex;
  align-items: center;

  height: clamp(100px, 8.79vw, 133px);
  width: clamp(100px, 8.79vw, 133px);
  justify-content: center;
  background-color: ${({ color }): string => color};
  color: #fff;
  border-radius: 50%;
  margin-bottom: clamp(24px, 2.11vw, 32px);
  & > span {
    font-size: clamp(56px, 4.76vw, 72px);
    line-height: 1;
    font-family: var(--gotham-ultra);
  }
`;

export const Paragraph = styled.p`
  max-width: 36.5vw;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(22px, 2.11vw, 32px);
  margin-bottom: clamp(16px, 2.11vw, 24px);
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    max-width: 100%;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    margin-bottom: 32px;
  }
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    &[data-should-hide='true'] {
      display: none;
    }
  }
`;

export const YellowBg = styled.div`
  background: linear-gradient(180deg, #ffdb31 0%, rgba(255, 219, 49, 0) 100%);
  width: 80.54%;
  border-radius: 24px;
  min-height: clamp(375px, 37.69vw, 570px);
  padding: 4.43vw 7.6vw 3.57vw 7.6vw;
  position: relative;
  @media (max-width: ${theme.breakpoints.mobile}px) {
    width: 100%;
  }
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: #ffffff;
    border-radius: 24px;
    z-index: -1;
  }
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
`;

export const BirthdayWrapper = styled(MaxWidthWrapper)`
  margin-top: clamp(510px, 39.08vw, 591px);
  display: flex;
  justify-content: flex-end;
  margin-bottom: clamp(60px, 39.48vw, 597px);
  position: relative;
`;

export const BirthdayContent = styled.div`
  width: 100%;
  max-width: clamp(386px, 42.65vw, 645px);
  @media (max-width: ${theme.breakpoints.mobile}px) {
    max-width: 100%;
  }
`;

export const FloatingSmudgeImage = styled(FloatingImage)`
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    transform: translate(34%, 53%);
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    bottom: 0;
    right: 0;
    top: initial;
    transform: translate(31px, 66%);
  }
`;

export const FormBg = styled.div`
  min-height: clamp(464px, 40.87vw, 618px);
  display: flex;
  position: relative;
  justify-content: center;
`;

export const FormColumn = styled.div`
  flex: 0.5;
`;

export const Form = styled.form`
  flex: 0.5;
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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.mobile}px) {
    max-width: initial;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  border: 1px solid #421b00;
  border-radius: 4px;
  padding: 9px 24px 5px 24px;
  outline: 0;
  font-size: 18px;
  line-height: 32px;
  width: 100%;
  color: #421b00;
  &::placeholder {
    color: #421b00;
    opacity: 0.5;
  }
  &[data-has-error='true'] {
    border: 1px solid #ff0000;
  }
`;

export const Select = styled.select`
  border: 1px solid #421b00;
  border-radius: 4px;
  padding: 9px 24px 5px 24px;
  outline: 0;
  font-size: 18px;
  height: 48px;
  width: 100%;
  color: #421b00;
  &::placeholder {
    color: #421b00;
    opacity: 0.5;
  }
  &[data-has-error='true'] {
    border: 1px solid #ff0000;
  }
  &:invalid {
    color: rgba(66, 27, 0, 0.5);
  }
`;

export const YellowBar = styled.div`
  pointer-events: none;
  position: absolute;
  top: clamp(547px, 60.58vw, 916px);
  left: -4.76vw;
  width: 435px;
  height: 1593px;
  background: linear-gradient(180deg, #ff9e16 0%, rgba(255, 158, 22, 0) 100%);
  border-radius: 300px;
  z-index: -3;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    width: clamp(265px, 25.87vw, 435px);
    height: clamp(634px, 61.91vw, 1593px);
    left: -185px;
  }
`;

export const Paper = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: clamp(796px, 81.87vw, 1238px);
  gap: 68px;
  display: flex;
  box-shadow: 0px 5px 10px rgba(66, 27, 0, 0.25);
  border-radius: 29px;
  transform: translateY(clamp(90px, 8.86vw, 134px));
  padding: clamp(30px, 7.4vw, 112px) clamp(32px, 3.7vw, 56px) clamp(72px, 6.21vw, 94px) clamp(32px, 3.7vw, 56px);
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    flex-direction: column;
    gap: 0;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;
