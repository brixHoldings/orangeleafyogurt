import styled from 'styled-components';

import FloatingImage from '@components/pages/OrangeLeaf/common/FloatingImage/FloatingImage';
import theme from '@styles/theme';

export const Container = styled.section`
  width: 100%;
  margin-inline: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFloatingImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    transform: translate(27.92vw, 9.27vw);
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    transform: translate(80vw, 9.27vw);
  }
  &::before {
    content: '';
    position: absolute;
    backdrop-filter: blur(15px);
    inset: 0;
    z-index: 1;
  }
`;

export const Title = styled.h1`
  font-size: clamp(35px, 5.29vw, 80px);
  line-height: clamp(45px, 5.82vw, 88px);
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 5px;
  }
`;

export const SubTitle = styled.h2`
  font-size: clamp(24px, 2.64vw, 40px);
  line-height: clamp(32px, 3.7vw, 56px);
  margin-bottom: clamp(46px, 3.5vw, 53px);
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    margin-bottom: 70px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline: 32px;
  margin-top: clamp(180px, 24.27vw, 367px);
  margin-bottom: clamp(163px, 14.88vw, 225px);
`;
