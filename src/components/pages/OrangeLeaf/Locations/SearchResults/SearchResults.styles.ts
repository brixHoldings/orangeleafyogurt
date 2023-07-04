import styled from 'styled-components';

import theme from '@styles/theme';

export const Column = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 132px 70px 351px 58px;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    padding: 24px 32px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 22px;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 30px;
  }
`;

export const FindLocation = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 13px;
  }
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    margin-bottom: 2px;
  }
`;

export const FindLocationText = styled.span`
  font-size: 16px;
  color: #ff9828;
  line-height: 32px;
  text-transform: lowercase;
  font-family: var(--century-gothic);
  text-decoration: underline;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const FieldSet = styled.fieldset`
  display: flex;
  border: 1px solid #421b00;
  border-radius: 4px;
  padding: 7px 15px;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 7px;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 20px;
  }
`;

export const MagnifierSvg = styled.svg`
  height: 32px;
  width: 24px;
  margin-right: 16px;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    width: 18px;
    margin-right: 18px;
  }
`;

export const LocationSvg = styled.svg`
  height: 32px;
  width: 18px;
  margin-right: 4px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0;
  width: 100%;
  background: #ffffff;
  font-size: 16px;
  line-height: 32px;
  color: #421b00;
  &::placeholder {
    opacity: 0.8;
  }
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const SearchResultList = styled.div`
  width: 100%;
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0;

  box-shadow: 0px 6px 20px rgba(63, 26, 0, 0.1);
`;

export const Suggestion = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  background: #fff;
  &:hover {
    background: #f2f2f2;
  }
`;
