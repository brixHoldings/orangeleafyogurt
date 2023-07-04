import styled from 'styled-components';

import { ButtonContainer } from '@components/pages/SmoothieFactory/Button/Button.styles';
import { ContentContainer } from '@components/ui/Card/Card.styles';
import theme from '@styles/theme';

export const BackgroundContainer = styled.div`
  background-image: url('/images/sf-soup.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
`;

export const Container = styled.div`
  padding-top: 204px;
  padding-left: 172px;
  padding-right: 80px;
  margin-bottom: 80px;
  background: linear-gradient(to right, #98c44a 0%, #98c44a 50%, transparent 50%, transparent 100%);
  position: relative;
  padding-bottom: 80px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    background: #98c44a;
    padding-right: 172px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-left: 25px;
    padding-right: 25px;
    background: #98c44a;
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentText = styled.div`
  width: calc(50% - 124px);

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    width: 100%;
    z-index: 3;
  }
`;

export const Title = styled.h2`
  font-size: 80px;
  line-height: 72px;
  margin-bottom: 52px;
  color: white;
  text-transform: uppercase;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 20px;
  z-index: 5;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const CtaText = styled.p`
  font-size: 18px;
  line-height: 32px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 32px;
    color: #4e3629;
  }
`;

export const CardContainer = styled.div`
  width: 570px;
  z-index: 2;

  ${ContentContainer} {
    @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
      border-radius: 29px;
    }
  }

  ${ButtonContainer} {
    @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
      width: 100%;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    width: 100%;
    margin-top: 60px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.p`
  font-family: 'Lucida Grande';
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 8px;
  margin-top: 24px;

  :first-of-type {
    margin-top: 0;
  }
`;

export const InputField = styled.input`
  font-family: 'Lucida Grande';
  width: calc(100% - 26px);
  border-radius: 4px;
  padding: 10px 0 10px 25px;
  border: 1px solid #421b00;
  margin-bottom: 8px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Disclaimer = styled.div`
  text-align: center;
  font-size: small;

  padding: 48px 172px 80px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding: 150px 25px 80px;
  }
`;
