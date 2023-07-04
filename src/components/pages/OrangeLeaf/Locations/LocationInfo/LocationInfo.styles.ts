import theme from '@styles/theme';

import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  width: 553px;
  height: 100%;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: clamp(232px, 15.34vw, 306px);
`;

export const BackImage = styled.div`
  position: absolute;
  right: 17px;
  top: 110px;
  background: #fff;
  width: 40px;
  height: 40px;
  z-index: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageSvg = styled.svg`
  position: absolute;
  bottom: 0;
  width: 72px;
  height: 72px;
  z-index: 1;
  transform: translateY(50%);
  left: 60px;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    left: 115px;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    width: 56px;
    height: 56px;
    left: 60px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 55px 60px;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;
  flex: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
`;

export const LocationTitle = styled.h1`
  font-size: 32px;
  line-height: 48px;
`;

export const LocationAddress = styled.span`
  font-size: 16px;
  line-height: 32px;
`;

export const WorkingHoursWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  @media (max-width: ${theme.breakpoints.mobile}px) {
    margin-bottom: 12px;
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
  align-items: flex-start;
`;

export const ButtonOutlined = styled.button`
  font-size: 14px;
  line-height: 13px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 35px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(113, 49, 14, 0.3);
  border: 1px solid #ff9828;
  color: #ff9828;
  cursor: pointer;
  align-items: flex-start;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
  @media (max-width: ${theme.breakpoints.mobile}px) {
    gap: 4px;
  }
`;

export const InfoTitle = styled.span`
  font-weight: 900;
  font-size: 16px;
  line-height: 32px;
`;

export const InfoContent = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const SocialIconSvg = styled.svg`
  width: 32px;
  height: 32px;
`;

export const BackLink = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 0;
`;
