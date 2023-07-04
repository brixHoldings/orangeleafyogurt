import styled from 'styled-components';

import { maxDesktopContentWidth } from '@constants/sizes';

import theme from './theme';

export const MaxWidthWrapper = styled.div`
  max-width: ${maxDesktopContentWidth}px;
  padding-inline: 60px;
  margin-inline: auto;
  width: 100%;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    padding-inline: 32px;
  }
`;
