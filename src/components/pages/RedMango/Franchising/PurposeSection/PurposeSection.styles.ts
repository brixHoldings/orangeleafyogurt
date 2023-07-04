import styled from 'styled-components';

import theme from '@styles/theme';

export const Container = styled.div`
  width: 100%;
  padding-top: 115px;
  position: relative;
`;

export const ContentContainer = styled.div`
  padding: 64px 0 76px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #cb333b;
  position: relative;
  overflow: hidden;
`;

export const Text = styled.p`
  font-family: 'Futura';
  font-size: 32px;
  line-height: 48px;
  max-width: 784px;
  z-index: 1;
  text-align: center;
  color: white;
  text-transform: uppercase;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding: 0 25px;
  }
`;

export const StyledLogo = styled.img`
  width: 113px;
  height: 110px;
  margin-bottom: 26px;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    width: 86px;
    height: 84px;
  }
`;

export const StyledLeftCircle = styled.img`
  position: absolute;
  top: 5%;
  left: -40%;
  width: 60%;
  height: 80%;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    top: unset;
    bottom: -30%;
  }
`;

export const StyledRightCircle = styled.img`
  position: absolute;
  bottom: -5%;
  right: -10%;
  width: 407px;
  height: 394px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    display: none;
  }
`;

export const StledDivider = styled.img`
  position: absolute;
  top: -60%;
  left: -20%;
  width: 700px;
  height: 900px;
`;
