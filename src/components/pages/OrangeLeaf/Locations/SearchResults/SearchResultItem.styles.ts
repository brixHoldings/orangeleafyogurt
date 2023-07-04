'use client';

import styled from 'styled-components';
import theme from '@styles/theme';

export const StoreSvg = styled.svg`
  height: 60px;
  width: 60px;
  margin-right: 24px;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    height: 50px;
    width: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 32px 35px;
  border-bottom: 2px solid #e3e3e3;
`;

export const Street = styled.span`
  font-weight: 900;
  font-size: 18px;
  line-height: 17px;
  color: #ff9828;
  text-transform: capitalize;
  text-align: left;
  margin-right: 4px;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 8px;
  }
`;

export const StreetWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 8px;
  }
`;

export const ArrowSvg = styled.svg`
  width: 16px;
  height: 18px;
`;

export const ClockIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;

export const Address = styled.span`
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 2px;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }
`;

export const WorkingHoursWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WorkingHours = styled(Address)`
  margin-bottom: 0 !important;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkToLocation = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
`;
